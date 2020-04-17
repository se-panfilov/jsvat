System.register([], function (exports_1, context_1) {
    "use strict";
    var greece;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("greece", greece = {
                name: 'Greece',
                codes: ['GR', 'GRC', '300'],
                calcFn: (vat) => {
                    let total = 0;
                    // eight character numbers should be prefixed with an 0.
                    const newVat = vat.length === 8 ? '0' + vat : vat;
                    // Extract the next digit and multiply by the counter.
                    for (let i = 0; i < 8; i++) {
                        total += Number(newVat.charAt(i)) * greece.rules.multipliers.common[i];
                    }
                    // Establish check digit.
                    total = total % 11;
                    total = total > 9 ? 0 : total;
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    const expect = Number(newVat.slice(8, 9));
                    return total === expect;
                },
                rules: {
                    multipliers: {
                        common: [256, 128, 64, 32, 16, 8, 4, 2]
                    },
                    regex: [/^(EL)(\d{9})$/]
                }
            });
        }
    };
});
