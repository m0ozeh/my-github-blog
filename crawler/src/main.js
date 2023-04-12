// import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "node:fs";

const PROJECT_DATA_NAME = "PinnedProject.ts";
const USER_BIO_NAME = "UserBio.ts";
const POST_DATA_NAME = "PostData.ts";

(async function main() {
    writeJsonToFile("./data", PROJECT_DATA_NAME, await fetchPinnedProject());
    writeJsonToFile("./data", USER_BIO_NAME, await fetchUserBio());
    writeJsonToFile("./data", POST_DATA_NAME, await getPost("../posts"));
})();

function writeJsonToFile(dir, filename, jsondata) {
    if (dir == "") dir = ".";
    filename = dir + "/" + filename;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(filename, `export default ` + JSON.stringify(jsondata));
}

async function fetchResponse(link) {
    const response = await axios.get(link);

    if (response.status != 200) {
        console.error("Crawler Error :: response states not available");
        return null;
    }
    return response;
}

function removeBlankAndLine(str) {
    return str.replace(/\n/g, "").replace(/^\s+|\s+$/g, "");
}

async function fetchPinnedProject() {
    const response = await fetchResponse("https://github.com/m0ozeh");

    const $ = cheerio.load(response.data);
    const projectList = [];

    const pinnedProjectClass = ".pinned-item-list-item-content";

    const ownerClass = "span.owner";
    const titleClass = "span.repo";
    const descClass = ".pinned-item-desc";
    const langClass = "span[itemprop='programmingLanguage']";
    const repoLinkHost = "https://github.com/";

    $(pinnedProjectClass).each((i, el) => {
        const doc = cheerio.load($(el).html().toString());

        const resultObj = {
            repoTitle: doc(titleClass).text(),
            repoDesc: removeBlankAndLine(doc(descClass).text()),
            repoLang: doc(langClass).text(),
        };

        const owner = doc(ownerClass)?.text();

        if (owner !== "") {
            resultObj.repoTitle = owner + "/" + resultObj.repoTitle;

            resultObj.repoLink = repoLinkHost + resultObj.repoTitle;
        } else {
            resultObj.repoLink = repoLinkHost + "m0ozeh/" + resultObj.repoTitle;
        }

        projectList.push(resultObj);
    });

    return projectList;
}

async function fetchUserBio() {
    const res = await fetchResponse("https://github.com/m0ozeh");

    return { bio: cheerio.load(res.data)("div.user-profile-bio").text() };
}

async function getPost(dir) {
    const data = [];
    const dirList = new Array(...fs.readdirSync(dir));

    for (let i = 0; i < dirList.length; ++i) {
        // console.log(dirList);
        const dirName = dirList[i];
        const fileDir = dir + "/" + dirName + "/";
        const child = new Array(...fs.readdirSync(fileDir));

        const item = {
            dirName: dirName,
            posts: child.map((fileName) => {
                const fileData = fs.statSync(fileDir + fileName);

                const itemObj = {
                    path: fileDir + fileName,
                    ctime: fileData.ctime,
                    mtime: fileData.mtime,
                    title: `[${dirName}] ` + fileName.replace(".md", ""),
                };

                return itemObj;
            }),
        };

        data.push(item);
    }

    return data;
}
