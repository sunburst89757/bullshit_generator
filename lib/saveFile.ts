import dayjs from "dayjs";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import { generateArticle, ITitle } from "./generateArticle";

export default function saveFile(title: ITitle, min: number, max: number) {
  const outputDir = resolve(__dirname, "../output");
  //    路径拼接
  const time = dayjs().format("YYYY-MM-DD HH-mm-ss");
  const outputFile = resolve(outputDir, `${title}${time}.txt`);
  //   文件夹不存在就创建文件夹
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }
  const article = generateArticle(min, max, title);
  console.log(article.join("\n    "));
  const text = `${title}\n\n    ${article.join("\n    ")}`;
  writeFileSync(outputFile, text);
}
