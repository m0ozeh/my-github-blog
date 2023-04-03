// import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "node:fs";

(async function main() {
    writeJsonToFile(
        "./data",
        "PINNED_PROJECT_DATA.ts",
        await fetchPinnedProject()
    );
    writeJsonToFile(
        "./data",
        "userdata.ts",
        await getUserBio()
    )
})();

function writeJsonToFile(dir, filename, jsondata) {
    if (dir == "") dir = ".";
    filename = dir + "/" + filename;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(filename, `export default ` + JSON.stringify(jsondata));
}

async function fetchPinnedProject() {
    const response = await axios.get("https://github.com/m0ozeh");

    if (response.status != 200) {
        console.error("Crawler Error :: response states not available");
        return;
    }

    const $ = cheerio.load(response.data);
    const jsondata = [];

    $(".pinned-item-list-item-content").each((i, el) => {
        const doc = cheerio.load($(el).html().toString());
        const resultObject = {};

        resultObject.repoTitle = doc("span.repo").text();
        resultObject.repoDesc = doc(".pinned-item-desc")
            .text()
            .replace(/\n/g, "")
            .replace(/^\s+|\s+$/g, "");
        resultObject.repoLang = doc(
            "span[itemprop='programmingLanguage']"
        ).text();

        jsondata.push(resultObject);
    });
    return jsondata;
}

async function getUserBio() {
    const res = await axios.get("https://github.com/m0ozeh");
    if (res.status != 200) {
        console.error("Crawler Error :: response states not available");
        return;
    }

    return { bio: cheerio.load(res.data)("div.user-profile-bio").text() };
}
