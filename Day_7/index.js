function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    obj => {
      return a1.includes(obj) + a2.includes(obj) + a3.includes(obj) === 1
    })
}