function fitsInOneBox(boxes: Box[]): boolean {
  return boxes
    .sort(
      (b1: Box, b2: Box) => b1.l - b2.l)
    .every(
      (box: Box, i: number) => i === 0 || boxes[i - 1].l < box.l && boxes[i - 1].w < box.w && boxes[i - 1].h < box.h)
}
interface Box {
  l: number;
  w: number;
  h: number;
}