System.register([], function (exports_1, context_1) {
    "use strict";
    var europe;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("europe", europe = {
                name: 'Europe',
                codes: ['EU', 'EUR', '000'],
                calcFn: () => {
                    // We know little about EU numbers apart from the fact that the first 3 digits represent the
                    // country, and that there are nine digits in total.
                    return true;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(EU)(\d{9})$/]
                }
            });
        }
    };
});
