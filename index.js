const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0,2)}
const returnLastTwoDrivers = function (drivers) { return drivers.slice(-2)}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]
const createFareMultiplier = function (int) {return function (fare) {return fare * int }}

/*
+ `createFareMultiplier()` — This is a higher-order function that takes in one argument, an integer,
and returns a function that will multiply a fare for a ride accordingly.
If `createFareMultiplier()` receives an argument of `4`,
it will return a function that takes in a fare as an argument and quadruples the fare.
*/
