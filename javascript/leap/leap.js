const divisionIsExact = (year, divisor) => !(year % divisor)

export const isLeap = year => 
  divisionIsExact(year, 4) && (
    divisionIsExact(year ,400) || 
    !divisionIsExact(year ,100)
  )