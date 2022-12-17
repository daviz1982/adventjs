function getFilesToBackup(lastBackup, changes) {
  let sol = changes.sort((a, b) => a[0] - b[0])
  sol = sol.map(file => file[1] > lastBackup && file[0])
  return [...new Set([...sol])].filter(file => file !== false)
}

/*
Score: 260
2,536 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)
*/