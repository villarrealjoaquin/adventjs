function findNaughtyStep(original: string, modified: string) {
  const [largest, shorter] = original.length >= modified.length
    ? [original, modified]
    : [modified, original];
  return [...largest].find((letter, i) => letter !== shorter[i]) ?? '';
}