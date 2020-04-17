System.register([], function (exports_1, context_1) {
    "use strict";
    var portugal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("portugal", portugal = {
                name: 'Portugal',
                codes: ['PT', 'PRT', '620'],
                calcFn: (vat) => {
                    let total = 0;
                    // Extract the next digit and multiply by the counter.
                    for (let i = 0; i < 8; i++) {
                        total += Number(vat.charAt(i)) * portugal.rules.multipliers.common[i];
                    }
                    // Establish check digits subtracting modulus 11 from 11.
                    total = 11 - (total % 11);
                    if (total > 9) {
                        total = 0;
                    }
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    const expect = Number(vat.slice(8, 9));
                    return total === expect;
                },
                rules: {
                    multipliers: {
                        common: [9, 8, 7, 6, 5, 4, 3, 2]
                    },
                    regex: [/^(PT)(\d{9})$/]
                }
            });
        }
    };
});
