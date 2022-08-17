function arrayOfDrivers() {
  const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
  return drivers;
}

function returnFirstTwoDrivers() {
  arrayOfDrivers();
  const newDrivers = arrayOfDrivers().slice(0, 2);
  return newDrivers;
}
console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers() {
  arrayOfDrivers();
  const lastTwoDrivers = arrayOfDrivers().slice(2, 4);
  return lastTwoDrivers;
}
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

function createFareMultiplier(num) {
  return function (value) {
    const fareMultiplier = num * value;
    return fareMultiplier;
  };
}
console.log(createFareMultiplier(4));

function fareDoubler(num) {
    return num*2
}
function fareTripler(num1) {
    return num1*3
}
const selectDifferentDrivers = function (drivers, otherDrivers)  {
    return otherDrivers(drivers);
  }
