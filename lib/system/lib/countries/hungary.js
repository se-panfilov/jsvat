System.register([], function (exports_1, context_1) {
    "use strict";
    var hungary;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hungary", hungary = {
                name: 'Hungary',
                codes: ['HU', 'HUN', '348'],
                calcFn: (vat) => {
                    let total = 0;
                    // Extract the next digit and multiply by the counter.
                    for (let i = 0; i < 7; i++) {
                        total += Number(vat.charAt(i)) * hungary.rules.multipliers.common[i];
                    }
                    // Establish check digit.
                    total = 10 - (total % 10);
                    if (total === 10)
                        total = 0;
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    const expect = Number(vat.slice(7, 8));
                    return total === expect;
                },
                rules: {
                    multipliers: {
                        common: [9, 7, 3, 1, 9, 7, 3]
                    },
                    regex: [/^(HU)(\d{8})$/]
                },
                example: 'HU12345678912'
            });
        }
    };
});
