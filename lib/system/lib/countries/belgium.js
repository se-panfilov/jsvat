System.register([], function (exports_1, context_1) {
    "use strict";
    var belgium;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("belgium", belgium = {
                name: 'Belgium',
                codes: ['BE', 'BEL', '056'],
                calcFn: (vat) => {
                    const newVat = vat.length === 9 ? '0' + vat : vat;
                    if (Number(newVat.slice(1, 2)) === 0)
                        return false;
                    const check = 97 - (Number(newVat.slice(0, 8)) % 97);
                    return check === Number(newVat.slice(8, 10));
                },
                rules: {
                    multipliers: {},
                    regex: [/^(BE)(0?\d{9})$/]
                }
            });
        }
    };
});
