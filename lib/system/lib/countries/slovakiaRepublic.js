System.register([], function (exports_1, context_1) {
    "use strict";
    var slovakiaRepublic;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("slovakiaRepublic", slovakiaRepublic = {
                name: 'Slovakia Republic',
                codes: ['SK', 'SVK', '703'],
                calcFn: (vat) => {
                    const expect = 0;
                    const checkDigit = Number(vat) % 11;
                    return checkDigit === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
                }
            });
        }
    };
});
