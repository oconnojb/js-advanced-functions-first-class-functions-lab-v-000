const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0,2)}
const returnLastTwoDrivers = function (drivers) { return drivers.slice(-2)}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]
const createFareMultiplier = function (int) {return function (fare) {return fare * int }}
const fareDoubler = function () {}

/*
+ `fareDoubler()` 
— Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. 
Invoke `createFareMultiplier()` in such a way that the new `fareDoubler()` 
function accepts a fare as its lone argument and doubles it.
+ `fareTripler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareTripler()` function accepts a fare as its lone argument and triples it.
+ `fetchSpecifiedDrivers()` — This function takes two arguments, an array of `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments, `fetchSpecifiedDrivers()` will return either the first two drivers or the last two drivers.
*/