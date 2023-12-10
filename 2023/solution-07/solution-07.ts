function drawGift(size: number, symbol: string) {
  if (size === 1) return "#\n";

  let init = " ".repeat(size - 1) + "#".repeat(size) + "\n";
  let middle = "#".repeat(size) + symbol.repeat(size - 2) + "#\n";
  let last = '#'.repeat(size) + '\n';
  
  for (let i = 1; i < size - 1; i++) {
    const spaces = " ".repeat(size - i - 1);
    const symbol1 = symbol.repeat(size - 2);
    const symbol2 = symbol.repeat(i - 1);
    const auth = spaces + '#' + symbol1 + '#' + symbol2 + '#' + '\n';
    init += auth;
    last = auth.trimStart() + last;
  }

  return init + middle + last;
}