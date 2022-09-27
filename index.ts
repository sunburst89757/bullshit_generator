import commandLineArgs from "command-line-args";
import { generateArticle } from "./lib/generateArticle";
import saveFile, { IFileOption } from "./lib/saveFile";
import { usage } from "./lib/terminalHelp";
// 配置我们的命令行参数
const optionDefinitions = [
  { name: "help" }, // help命令配置
  { name: "title", alias: "t", type: String },
  { name: "min", type: Number },
  { name: "max", type: Number }
];
//  配置help使用方法
const options = commandLineArgs(optionDefinitions); // 获取命令行的输入
if ("help" in options) {
  console.log(usage);
} else {
  const article = generateArticle({ ...(options as IFileOption) });
  console.log(article, "\n");
  const output = saveFile(options as IFileOption);
  console.log(`生成成功！文章保存于：${output}`);
}
