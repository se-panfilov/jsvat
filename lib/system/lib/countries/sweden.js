System.register([], function (exports_1, context_1) {
    "use strict";
    var sweden;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("sweden", sweden = {
                name: 'Sweden',
                codes: ['SE', 'SWE', '752'],
                calcFn: (vat) => {
                    let expect;
                    // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
                    let R = 0;
                    for (let i = 0; i < 9; i = i + 2) {
                        const digit = Number(vat.charAt(i));
                        R += Math.floor(digit / 5) + ((digit * 2) % 10);
                    }
                    // Calculate S where S = C2 + C4 + C6 + C8
                    let S = 0;
                    for (let j = 1; j < 9; j = j + 2) {
                        S += Number(vat.charAt(j));
                    }
                    const checkDigit = (10 - ((R + S) % 10)) % 10;
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    expect = Number(vat.slice(9, 10));
                    return checkDigit === expect;
                },
                rules: {
                    multipliers: {},
                    regex: [/^(SE)(\d{10}01)$/]
                }
            });
        }
    };
});
