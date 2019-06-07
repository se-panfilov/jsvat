import jsvat from "jsvat"

const {checkVAT} = jsvat
// const countriesList = omit<(jsvat, 'checkVAT');
//
// function omit<T> (obj: { readonly [key: string]: any }, key: string): T {
//     const result = {...obj};
//     delete result[key]
//     return result as T;
// }

// const list: ReadonlyArray<Country> = [belgium]

// const a = checkVAT('BE0411905847', countriesList); // true: accept only Belgium VATs
// const b = checkVAT('BG131134023', [belgium, austria]); // true: accept only Belgium or Austria VATs
// const c = checkVAT('BG131134023', [austria]); // false: accept only Austria VATs

console.info(a)
console.info(b)
console.info(c)