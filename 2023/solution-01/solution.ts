function findFirstRepeated(gifts: Array<string>) {
  const arr = []
  
  for (let gift of gifts) {
    if (!arr.includes(gift)) {
      arr.push(gift)
    } else {
      return gift
    }
  }

  return -1
}

