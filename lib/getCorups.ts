//  读取文件语料库
import { readFileSync } from "fs";
import path from "path";
import { createRandomPick } from "./random";

interface CorupsObject {
  title: string[];
  famous: string[];
  bosh_before: string[];
  bosh: string[];
  conclude: string[];
  said: string[];
}
const fileData = readFileSync(path.resolve(__dirname, "../corpus/data.json"), {
  encoding: "utf-8"
});
const corups: CorupsObject = JSON.parse(fileData);
export default corups;
const { famous, bosh_before, bosh, conclude, said } = corups;
//  生成随机的获取句子函数
export const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid] = [
  famous,
  bosh_before,
  bosh,
  conclude,
  said
].map((corup) => createRandomPick(corup));
