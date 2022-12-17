function fitsInOneBox(boxes) {
  const cmp = (prop, index) => (
    boxes[index - 1][prop] < boxes[index][prop]
  )
  return boxes
    .sort(
      (b1, b2) => b1.l - b2.l
    )
    .every(
      (box, i) => i === 0 || (
        cmp('l', i) && cmp('w', i) && cmp('h', i)
      )
    )
}