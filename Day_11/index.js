function getCompleted(part, total) {
  const tts = (str) => {
    const [h, m, s] = str.split(":")
    return 3600 * h + 60 * m + s
  }

  const format = rel => {
    if (rel === 0) return '0/1'
    if (rel === 1) return '1/1'
    let i, n
    for (i = 1; ; i++) {
      n = i * rel
      if (Number.isInteger(n)) {
        break
      }
    }
    return `${n}/${i}`
  }

  const rel = format(tts(part) / tts(total))

  return rel
}
