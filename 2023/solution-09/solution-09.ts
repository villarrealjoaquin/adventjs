function adjustLights(lights) {
  let a = 0 ;
  let b = 0;
  let i = 0;

  for(let light of lights) {
    const n = Math.abs(i % 2 - (+ (light === '🟢')));
    a += n
    b += 1 - n
    i++
  }
  return Math.min(a, b);
}