System.register([], function (exports_1, context_1) {
    "use strict";
    var estonia;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("estonia", estonia = {
                name: 'Estonia',
                codes: ['EE', 'EST', '233'],
                calcFn: (vat) => {
                    let total = 0;
                    let expect;
                    // Extract the next digit and multiply by the counter.
                    for (let i = 0; i < 8; i++) {
                        total += Number(vat.charAt(i)) * estonia.rules.multipliers.common[i];
                    }
                    // Establish check digits using modulus 10.
                    total = 10 - (total % 10);
                    if (total === 10)
                        total = 0;
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    expect = Number(vat.slice(8, 9));
                    return total === expect;
                },
                rules: {
                    multipliers: {
                        common: [3, 7, 1, 3, 7, 1, 3, 7]
                    },
                    regex: [/^(EE)(10\d{7})$/]
                },
                example: 'EE123456789'
            });
        }
    };
});
