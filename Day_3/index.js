function distributeGifts(packOfGifts, reindeers) {
  const fn = (sum, current) => sum + [...current].length
  return Math.floor((2 * reindeers.reduce(fn, 0)) / packOfGifts.reduce(fn, 0))
}