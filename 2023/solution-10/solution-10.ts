function createChristmasTree(ornaments: string, height: number) {
  let tree = '';
  let ornamentsIndex = 0
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    let line = ''
    for (let x = 0; x < i; x++) {
      line += ' ' + ornaments[ornamentsIndex % ornaments.length]
      ornamentsIndex++
    }
    tree += spaces + line.trim() + '\n'
  }
  return tree + ' '.repeat(height - 1) + '|' + '\n'
}