const jsvat = require('jsvat/lib/commonjs');

const { checkVAT } = jsvat

const countriesObj = omit(jsvat, 'checkVAT');

function omit(obj, key) {
    const result = { ...obj };
    delete result[key]
    return result;
}

const countriesList = Object.keys(countriesObj).map(key => countriesObj[key])

const a = checkVAT('BE0411905847', countriesList);
console.info(a)

// // import {checkVAT, belgium, austria} from 'jsvat'
// const { checkVAT, belgium, austria } = require('jsvat/lib/commonjs');
//
// const a = checkVAT('BE0411905847', [belgium]); // true: accept only Belgium VATs
// const b = checkVAT('BE0411905847', [belgium, austria]); // true: accept only Belgium or Austria VATs
// const c = checkVAT('BE0411905847', [austria]); // false: accept only Austria VATs
//
// console.info(a)
// console.info(b)
// console.info(c)