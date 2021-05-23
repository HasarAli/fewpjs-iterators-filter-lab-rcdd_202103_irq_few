// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
  return drivers.find(driver => letters === driver.slice(0, letters.length))
}

console.log(fuzzyMatch(['hasar', 'wshar'], 'ha'))