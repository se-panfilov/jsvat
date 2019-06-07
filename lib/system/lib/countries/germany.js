System.register([], function (exports_1, context_1) {
    "use strict";
    var germany;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("germany", germany = {
                name: 'Germany',
                codes: ['DE', 'DEU', '276'],
                calcFn: (vat) => {
                    // Checks the check digits of a German VAT number.
                    let product = 10;
                    let sum = 0;
                    let checkDigit = 0;
                    let expect;
                    for (let i = 0; i < 8; i++) {
                        // Extract the next digit and implement peculiar algorithm!.
                        sum = (Number(vat.charAt(i)) + product) % 10;
                        if (sum === 0) {
                            sum = 10;
                        }
                        product = (2 * sum) % 11;
                    }
                    // Establish check digit.
                    if (11 - product === 10) {
                        checkDigit = 0;
                    }
                    else {
                        checkDigit = 11 - product;
                    }
                    // Compare it with the last two characters of the VAT number. If the same, then it is a valid
                    // check digit.
                    expect = Number(vat.slice(8, 9));
                    return checkDigit === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(DE)([1-9]\d{8})$/]
                }
            });
        }
    };
});
