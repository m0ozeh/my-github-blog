// import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "node:fs";

(async function main() {
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
        resultObject.repoDesc = doc(".pinned-item-desc").text().replace(/\n/g, "").replace(/^\s+|\s+$/g, "");
        resultObject.repoLang = doc("span[itemprop='programmingLanguage']").text();
        
        jsondata.push(resultObject);
    });
    const file = "data/PINNED_PROJECT_DATA.js";
    fs.writeFileSync(file, `export default ` + JSON.stringify(jsondata));
})();