function findNaughtyStep(original, modified) {
  const [largest, shorter] = original.length >= modified.length
    ? [original, modified]
    : [modified, original];
  return [...largest].find((letter, i) => letter !== shorter[i]) ?? '';
}