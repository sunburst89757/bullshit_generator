import dayjs from "dayjs";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { generateArticle } from "./generateArticle";

export interface IFileOption {
  title: string;
  min?: number;
  max?: number;
}
export default function saveFile(options: IFileOption) {
  const outputDir = resolve(__dirname, "../output");
  //    路径拼接
  const time = dayjs().format("YYYY-MM-DD HH-mm-ss");
  const outputFile = resolve(outputDir, `${options.title}${time}.txt`);
  //   文件夹不存在就创建文件夹
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }
  const article = generateArticle(options);
  const text = `${options.title}\n\n    ${article.join("\n    ")}`;
  writeFileSync(outputFile, text);
  return outputDir;
}
