export const wordsPerMinToInterval = (wpm: number) => {
  return (1 / (wpm / 60)) * 1000;
};

export const partition = (blockSize: number, input: Array<string>) => {
  const res: string[][] = [];
  for (let i = 0; i < input.length; i += blockSize) {
    let block = input.slice(i, i + blockSize);
    res.push(block);
  }
  return res;
};

export const stringToWordArray = (text: string) => {
  return text
    .trim()
    .replace(/\s\s+/g, " ")
    .split(/\s/);
};
