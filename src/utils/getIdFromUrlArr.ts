export const getIdFromUrlArray = (arr: string[]): number[] => {
  return arr.reduce((acc, url) => {
    const id = url.split('/').pop();

    acc.push(Number(id));

    return acc;
  }, [] as number[]);
};
