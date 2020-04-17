System.register([], function (exports_1, context_1) {
    "use strict";
    var latvia;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("latvia", latvia = {
                name: 'Latvia',
                codes: ['LV', 'LVA', '428'],
                calcFn: (vat) => {
                    let total = 0;
                    // Differentiate between legal entities and natural bodies. For the latter we simply check that
                    // the first six digits correspond to valid DDMMYY dates.
                    if (/^[0-3]/.test(vat)) {
                        return Boolean(/^[0-3][0-9][0-1][0-9]/.test(vat));
                    }
                    else {
                        // Extract the next digit and multiply by the counter.
                        for (let i = 0; i < 10; i++) {
                            total += Number(vat.charAt(i)) * latvia.rules.multipliers.common[i];
                        }
                        // Establish check digits by getting modulus 11.
                        if (total % 11 === 4 && Number(vat[0]) === 9)
                            total = total - 45;
                        if (total % 11 === 4) {
                            total = 4 - (total % 11);
                        }
                        else if (total % 11 > 4) {
                            total = 14 - (total % 11);
                        }
                        else if (total % 11 < 4) {
                            total = 3 - (total % 11);
                        }
                        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                        const expect = Number(vat.slice(10, 11));
                        return total === expect;
                    }
                },
                rules: {
                    multipliers: {
                        common: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6]
                    },
                    regex: [/^(LV)(\d{11})$/]
                }
            });
        }
    };
});
