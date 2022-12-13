function selectSleigh(distance, sleighs) {
  const MAX = 20
  const filteredSleighs = sleighs.filter(
    s => s.consumption * distance <= MAX
  )
  if (filteredSleighs.length > 0) {
    return filteredSleighs[filteredSleighs.length - 1].name
  }
  return null
}

/*
Score: 260
2,974 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)
*/
