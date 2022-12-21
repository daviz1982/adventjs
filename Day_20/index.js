function howManyReindeers(reindeerTypes, gifts) {
  const calcWeights = (weight, reindeersArray, reindeers) => {
    let arrTypes = {}
    reindeerTypes.map(item => {arrTypes[item.type] = item.weightCapacity})
    
    let filteredReindeerTypes = reindeersArray.filter(reindeer => reindeer.weightCapacity <= weight)
    
  	const reducerFn = (acc, r, i) => (acc += r.num * arrTypes[r.type])

    
    let prevReindeers = [...reindeers]
      debugger
    if (reindeers.length === 0) {
    	reindeers = filteredReindeerTypes.slice(0,1).map(
      	(item, index) => ({ type: item.type, num: 1})
    	)
    } else {
      reindeers = reindeers.map((item, index) => {
        let {type, num} = item
        filteredReindeerTypes.slice(0,1).forEach(reindeerType => {
          if (type === reindeerType.type) num++
        })
        return {type, num}
      })
    }
    
    let remainingWeight = weight - reindeers.reduce(reducerFn, 0)
    let actualWeight = reindeers.reduce(reducerFn, 0)
    
    if (weight - actualWeight < 0) {
      console.log(filteredReindeerTypes, filteredReindeerTypes.slice(1))
      calcWeights(weight, filteredReindeerTypes.slice(1), prevReindeers)
    }
    console.log(weight, filteredReindeerTypes, reindeers, actualWeight, remainingWeight)
    
    if (remainingWeight > 0) {
      calcWeights(weight, filteredReindeerTypes, reindeers)
    }
    return reindeers
  }

  const calcReindeers = item => {
    return {
      country: item.country,
      reindeers: calcWeights(item.weight, reindeerTypes, [])
    }
  }
  
  return gifts.map(calcReindeers)
}

var reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
var gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)
