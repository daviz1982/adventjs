function checkPart(part: string): boolean {
  const isPalin = (str: string):boolean => str === [...str].reverse().join('')

  let solution: boolean = isPalin(part)

  let str: string
  for (let i = 0; i < part.length; i++) {
    str = part.slice(0, i) + part.slice(i + 1)
    solution = isPalin(str)
    if (solution) break
  }

  return solution
}
/**                                  

Score: 180
2,229 ops/s (Higher is better)
Cognitive complexity: 3 (Lower is better)

*/
