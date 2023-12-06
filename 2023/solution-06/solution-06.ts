function maxDistance(movements: string) {
  let count = 0, right = 0, left = 0;
  const moves = {
    ">": () => right++,
    "<": () => left++,
    "*": () => count++,
  };
  for (let m of movements) moves[m]();
  return Math.abs(right - left) + count;
}