function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => b - a);
  const add = (acc, el) => (acc += el);
  let solutions = [];
  const backtrack = (cities, path) => {
    const sum = path.reduce(add, 0);
    if (path.length <= maxCities) {
      solutions.push([...path]);
    }
    for (let i = 0; i < cities.length; i++) {
      path.push(cities[i]);
      backtrack(cities.slice(i + 1), path);
      path.pop(cities[i]);
    }
  };
  backtrack(giftsCities, []);
  let sol = 0;
  solutions.sort((a, b) => b.length - a.length)
  sol = solutions.filter((solution) => {
    return (
      solution.length > 0 &&
      solution.length <= maxCities &&
      solution.reduce(add, 0) === maxGifts
    );
  });
  if (sol.length === 0) {
    sol = solutions.filter((solution) => {
      return (
        solution.length > 0 &&
        solution.length <= maxCities &&
        solution.reduce(add, 0) <= maxGifts
      );
    });
  }
  if (sol[0]) {
    return sol[0].reduce(add, 0);
  }
  if (sol.length === 0) {
    return 0
  }
  return sol;
}