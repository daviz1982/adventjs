function decorateTree(base) {
  const dictionary = {
    'B P': 'R',
    'P B': 'R',
    'B R': 'P',
    'R B': 'P',
    'P R': 'B',
    'R P': 'B',
    'B B': 'B',
    'P P': 'P',
    'R R': 'R'
  }
  const buildRow = (str) => {
    let arr = [...str].filter(s => s !== ' '), resp = '', prev = arr[0]
    for (let i = 1; i < arr.length; i++) {
      resp += dictionary[`${prev} ${arr[i]}`] + ' '
      prev = arr[i]
    }
    return resp.trim()
  }

  const buildTree = (tree, row) => {
    tree.unshift(row)
    if (row.length === 1) {
      return tree
    }
    return buildTree(tree, buildRow(row))
  }

  const solution = buildTree([], base)

  return solution
}