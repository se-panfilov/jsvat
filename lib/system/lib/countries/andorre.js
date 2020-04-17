System.register([], function (exports_1, context_1) {
    "use strict";
    var andorre;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("andorre", andorre = {
                name: 'Andorre',
                codes: ['AD', 'AND', '020'],
                calcFn: (vat) => {
                  return vat.length === 8;
                },
                rules: {
                  regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
                }
            });
        }
    };
});
