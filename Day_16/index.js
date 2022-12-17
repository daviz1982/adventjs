function fixLetter(letter) {
  const toUpper = (match, p1, p2) => (
    match.toUpperCase()
  )

  let resp = letter.trim() + "."

  resp = resp.replace(/[\?]{2,}/gi, "?")
  resp = resp.replace(/ \?/gi, "?")
  resp = resp.replace(/[ ]+/gi, " ")
  resp = resp.replace(/(?:(\.)\.)/g, "$1")
  resp = resp.replace(/(?:(!)\.)/g, "$1")
  resp = resp.replace(/(?:(\?)\.)/g, "$1")
  resp = resp.replace(/[ ]?([,\.])[ ]?/g, "$1 ")
  resp = resp.replace(/^(.){1}/gi, toUpper)
  resp = resp.replace(/[\?!.] (.){1}/gi, toUpper)
  resp = resp.replace(/santa claus/gi, 'Santa Claus')
  return resp.trim()
}