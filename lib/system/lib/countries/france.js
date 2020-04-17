System.register([], function (exports_1, context_1) {
    "use strict";
    var france;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("france", france = {
                name: 'France',
                codes: ['FR', 'FRA', '250'],
                calcFn: (vat) => {
                    let total;
                    // Checks the check digits of a French VAT number.
                    if (!/^\d{11}$/.test(vat))
                        return true;
                    // Extract the last nine digits as an integer.
                    total = Number(vat.substring(2));
                    // Establish check digit.
                    total = (total * 100 + 12) % 97;
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    const expect = Number(vat.slice(0, 2));
                    return total === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(FR)(\d{11})$/, /^(FR)([A-HJ-NP-Z]\d{10})$/, /^(FR)(\d[A-HJ-NP-Z]\d{9})$/, /^(FR)([A-HJ-NP-Z]{2}\d{9})$/]
                }
            });
        }
    };
});
