function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
  giftsCities.sort((a: number, b: number): number => a - b)
  let usedCities = 0
  let leftGifts = maxGifts;
  let sum = 0
  giftsCities.forEach((city: number) => {
    if (city > leftGifts) return
    leftGifts -= city
    sum += city
  })
  return sum
}
