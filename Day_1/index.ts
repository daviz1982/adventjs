function wrapping(gifts) {
  const func = gift => {
    const wrap = '*'.repeat(gift.length + 2)
    return [wrap, `*${gift}*`, wrap].join('\n')
  }
  return gifts.map(func)
}
