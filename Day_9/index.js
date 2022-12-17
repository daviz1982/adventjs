function countTime(leds) {
  let iterations = 0

  const changeLeds = (leds) => {
    let prev = leds[leds.length - 1]
    for (let i in leds) {
      let tmp = leds[i]
      leds[i] = +(prev === 1 || leds[i])
      prev = tmp
    }
    return leds
  }
  while (!leds.every(led => led === 1)) {
    leds = changeLeds(leds)
    iterations += 7
  }

  return iterations
}