function countHours(year, holidays) {
  return holidays.reduce(
    (sum, holiday) => {
      const day = new Date(`${year} ${holiday}`).getDay()
      return sum + 2 * +(day % 6 !== 0)
    }
    , 0)
}