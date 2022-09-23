//  读取文件语料库
import { readFileSync } from "fs";
import path from "path";

const fileData = readFileSync(path.resolve(__dirname, "../corpus/data.json"), {
  encoding: "utf-8"
});

export default JSON.parse(fileData);
