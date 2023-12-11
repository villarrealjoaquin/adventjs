function organizeGifts(gifts:string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let aux = 0;
  let parenthesis = []
  let letter, number;
  
  let values = [
    { value: 50, open: "[", close: "]" },
    { value: 10, open: "{", close: "}" },
    { value: 1, open: "(", close: ")" },
  ];

  for (let i = 0; i < gifts.length; i++) {
    letter = [...alphabet].indexOf(gifts[i]);  
    const parteNumerica = [...gifts].findIndex(
      (gift) => gift === alphabet[letter]
    );

    if (parteNumerica >= 0) {
      const sliceString = [...gifts].slice(aux, parteNumerica).filter((c) => !isNaN(c)).join("");
      number = parseInt(sliceString);
      aux = parteNumerica;
      for (let j = 0; j < values.length; j++) {
        while (number >= values[j].value) {
          const condition = number < 10
          if(condition) {
            parenthesis.push(alphabet[letter])
          }
          result += `${values[j].open}${alphabet[letter]}${values[j].close}`;
          number -= values[j].value;
        }
      }
    }
  }
  return result;
}