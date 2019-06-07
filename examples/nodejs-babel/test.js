import { checkVAT, belgium, countries } from 'jsvat';
// import { checkVAT, belgium, countries } from 'jsvat/es6'; // this is also possible

// 1. Check for specific country
const resultBE = checkVAT('BE0411905847', [belgium]);
console.info('BE0411905847: ', resultBE.isValid)

// 2. check against all possible countries
const resultAU = checkVAT('ATU00000033', countries);
console.info('ATU00000033: ', resultAU.country.name)
