System.register([], function (exports_1, context_1) {
    "use strict";
    var serbia;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("serbia", serbia = {
                name: 'Serbia',
                codes: ['RS', 'SRB', '688'],
                calcFn: (vat) => {
                    // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.
                    let product = 10;
                    let sum = 0;
                    for (let i = 0; i < 8; i++) {
                        // Extract the next digit and implement the algorithm
                        sum = (Number(vat.charAt(i)) + product) % 10;
                        if (sum === 0) {
                            sum = 10;
                        }
                        product = (2 * sum) % 11;
                    }
                    // Now check that we have the right check digit
                    const expect = 1;
                    const checkDigit = (product + Number(vat.slice(8, 9))) % 10;
                    return checkDigit === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(RS)(\d{9})$/]
                }
            });
        }
    };
});
