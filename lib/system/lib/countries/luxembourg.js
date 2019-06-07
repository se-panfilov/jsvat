System.register([], function (exports_1, context_1) {
    "use strict";
    var luxembourg;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("luxembourg", luxembourg = {
                name: 'Luxembourg',
                codes: ['LU', 'LUX', '442'],
                calcFn: (vat) => {
                    const expect = Number(vat.slice(6, 8));
                    const checkDigit = Number(vat.slice(0, 6)) % 89;
                    // Checks the check digits of a Luxembourg VAT number.
                    return checkDigit === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(LU)(\d{8})$/]
                }
            });
        }
    };
});
