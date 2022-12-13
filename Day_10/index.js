function checkJump(heights) {
  let prev = heights[0], isJump = false, descending = false
  for (let index = 1; index < heights.length; index++) {
    const item = heights[index]
    if (item > prev) {
      prev = item
      if (index > 1 && descending) {
        isJump = false
      }
    } else if (item === prev) {
      if (index === 1 || index === heights.length - 1) {
        isJump = false
      }
    } else {
      if (!descending) {
        descending = true
        isJump = true
      } else {
        isJump = true
      }
      prev = item
    }
    if (isJump === false && descending === true) {
      break
    }
  }
  return isJump
}
