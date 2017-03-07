var calc = require('./calc');

var summ = 0;

console.time("calculated in ");
summ += calc();
summ += calc();
summ += calc();
console.log(`Summ = ${summ}`);
console.timeEnd("calculated in ");