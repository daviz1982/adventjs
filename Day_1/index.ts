function wrapping(gifts) {
  const func = gift => {
    const wrap = '*'.repeat(gift.length + 2)
    return `${wrap}\n*${gift}*\n${wrap}`
  }
  return gifts.map(func)
}
