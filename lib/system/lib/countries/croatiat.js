System.register([], function (exports_1, context_1) {
    "use strict";
    var croatia;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("croatia", croatia = {
                name: 'Croatia',
                codes: ['HR', 'HRV', '191'],
                calcFn: (vat) => {
                    // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.
                    let product = 10;
                    let sum = 0;
                    for (let i = 0; i < 10; i++) {
                        // Extract the next digit and implement the algorithm
                        sum = (Number(vat.charAt(i)) + product) % 10;
                        if (sum === 0) {
                            sum = 10;
                        }
                        product = (2 * sum) % 11;
                    }
                    // Now check that we have the right check digit
                    const expect = Number(vat.slice(10, 11));
                    return (product + expect) % 10 === 1;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(HR)(\d{11})$/]
                },
                example: 'HR12345678912'
            });
        }
    };
});
