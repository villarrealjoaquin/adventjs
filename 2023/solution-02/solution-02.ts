function manufacture(gifts: string[], materials: string) {
  const arr = [];
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    let canManufacture = true;
    for (let x = 0; x < gift.length; x++) {
      if (!materials.includes(gift[x])) {
        canManufacture = false;
        break;
      }
    }
    if (canManufacture) {
      arr.push(gift);
    }
  }
  return arr
}