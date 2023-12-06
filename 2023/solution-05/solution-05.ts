function cyberReindeer(road: string, time: number) {
  const path = [road];
  let dot = '.';
  for (let i = 1; i < time; i++) {
    if (i >= 5) road = road.replaceAll("|", "*")
    const trineo = road.indexOf('S');
    const position = road[trineo + 1];
    if (position === '.' || position === '*') {
      road = [...road];
      road[trineo] = dot;
      dot = road[trineo + 1];
      road[trineo + 1] = "S";
      road = road.join('');
    }
    path.push(road);
  }
  return path;
}