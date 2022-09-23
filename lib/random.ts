//  文章和段落字数长度限制 大于等于min，小于等于max的字数
export const randomInt = (min: number, max: number) => {
  const p = Math.random();
  return Math.floor(min + (max - min) * p);
};
//  随机选取语料库中每一种属性选择的哪一个这里生成一个工厂函数
export const createRandomPick = (arr: string[]) => {
  //    浅拷贝不影响原数组的值
  const newArr = [...arr];
  //   保证不要连续重复
  function randomPick() {
    const end = newArr.length - 1;
    //  选不到数组最后一位
    const index = randomInt(0, end);
    const picked = newArr[index];
    //  上次选择的到了数组最后
    [newArr[index], newArr[end]] = [newArr[end], newArr[index]];
    return picked;
  }
  //   抛弃第一次选择 因为第一次选不到最后一位不符合随机
  randomPick();
  return randomPick;
};
