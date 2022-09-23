export default function generateSentence(
  randomSentence: () => string,
  replacer?: Record<string, string>
) {
  let sentence = randomSentence();
  if (!replacer) return sentence;
  Object.keys(replacer).forEach((key) => {
    sentence = sentence.replace(new RegExp(`{{${key}}}`, "g"), replacer[key]);
  });
  return sentence;
}
