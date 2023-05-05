import Showdown from "showdown";
import * as fs from "node:fs";

export default class MarkdownParser {
    static converter = new Showdown.Converter();
    fileBuffer;
    constructor(filepath) {
        this.fileBuffer = fs.readFileSync(filepath);
    }

    getHTMLContent() {
        const textHtmlData = this.fileBuffer.toString();
        return MarkdownParser.converter.makeHtml(textHtmlData);
    }

}