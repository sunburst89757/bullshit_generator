import generateArticle from "./lib/generate";

const article = generateArticle(800, 1200, "一天掉多少根头发");
article.forEach((section) => {
  console.log("\n");
  console.log(section);
});
