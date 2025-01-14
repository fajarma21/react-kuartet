export const randomTurn = (player: number) => {
  return Math.floor(Math.random() * player);
};

export function shuffle<T>(arr: T[]): T[] {
  const length = arr.length;
  const usedList: number[] = [];

  const newArr = [...Array(arr.length)].map(() => {
    let random = Math.floor(Math.random() * length);
    while (usedList.includes(random)) {
      random = Math.floor(Math.random() * length);
    }
    usedList.push(random);
    return arr[random];
  });

  return newArr;
}
