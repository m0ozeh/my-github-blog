// import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "node:fs";
import MarkdownParser from "./MarkdownParser.js";

const PROJECT_DATA_NAME = "PinnedProject.ts";
const USER_BIO_NAME = "UserBio.ts";
const POST_DATA_NAME = "PostData.ts";
const OUTPUT_PATH = "./data";
const POST_PATH = "../posts";
const GITHUB_URL = "https://github.com/";
const MY_GITHUB_URL = GITHUB_URL + "m0ozeh/";

(async function main() {
    writeJsonToFile(OUTPUT_PATH, PROJECT_DATA_NAME, await fetchPinnedProject());
    writeJsonToFile(OUTPUT_PATH, USER_BIO_NAME, await fetchUserBio());
    writeJsonToFile(OUTPUT_PATH, POST_DATA_NAME, await getPost(POST_PATH));
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
    const response = await fetchResponse(MY_GITHUB_URL);

    const $ = cheerio.load(response.data);
    const projectList = [];

    const pinnedProjectClass = ".pinned-item-list-item-content";

    const ownerClass = "span.owner";
    const titleClass = "span.repo";
    const descClass = ".pinned-item-desc";
    const langClass = "span[itemprop='programmingLanguage']";
    const repoLinkHost = GITHUB_URL;

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

            resultObj.repoLink = GITHUB_URL + resultObj.repoTitle;
        } else {
            resultObj.repoLink = MY_GITHUB_URL + resultObj.repoTitle;
        }

        projectList.push(resultObj);
    });

    return projectList;
}

async function fetchUserBio() {
    const res = await fetchResponse(MY_GITHUB_URL);

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
                    title: fileName.replace(".md", ""),
                    category: dirName,
                    // body: new MarkdownParser(fileDir + fileName).getHTMLContent()
                };

                return itemObj;
            }),
        };

        data.push(item);
    }

    return data;
}