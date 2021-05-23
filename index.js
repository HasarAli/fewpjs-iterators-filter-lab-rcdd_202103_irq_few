// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
  return drivers.find(driver => letters.toLowerCase()
                                  .includes(driver.toLowerCase().charAt(0)))
}