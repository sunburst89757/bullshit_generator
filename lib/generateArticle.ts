import generateSentence from "./generateSentences";
import {
  pickBosh,
  pickBoshBefore,
  pickConclude,
  pickFamous,
  pickSaid
} from "./getCorups";
import { randomInt } from "./random";
import { IFileOption } from "./saveFile";

// export type ITitle =
//   | "一天掉多少根头发"
//   | "中午吃什么"
//   | "学生会退会"
//   | "好好学习"
//   | "生活的意义"
//   | "科学和人文谁更有意义"
//   | "熬夜一时爽";
export function generateArticle({
  min = 800,
  max = 1200,
  title
}: IFileOption): string[] {
  let totalLength = 0;
  const articleLength = randomInt(min, max);
  const article: string[] = [];
  while (totalLength < articleLength) {
    // 段落
    let section = "";
    const sectionLength = randomInt(200, 500);
    // 段落只能以。？结尾
    while (section.length < sectionLength || !/[。？]$/.test(section)) {
      const percent = randomInt(0, 100);
      let sentence = "";
      //    百分之二十的名人名言
      if (percent < 20) {
        sentence = generateSentence(pickFamous, {
          said: pickSaid(),
          conclude: pickConclude()
        });
      } else if (percent < 80) {
        sentence =
          generateSentence(pickBoshBefore, { title }) +
          generateSentence(pickBosh, { title });
      } else {
        sentence = generateSentence(pickBosh, { title });
      }
      section += sentence;
    }
    article.push(section);
    totalLength += section.length;
  }
  return article;
}
