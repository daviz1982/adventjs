function createCube(size: number): string {
  let str1 = '', str2 = ''
  for (let i = 0; i < size; i++) {
    str1 += `${' '.repeat(size - i - 1)}${'/\\'.repeat(i + 1)}${'_\\'.repeat(size)}\n`
    str2 += `${' '.repeat(i)}${'\\/'.repeat(size - i)}${'_/'.repeat(size)}\n`
  }
  return str1 + str2.slice(0, -1)
}