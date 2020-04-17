System.register([], function (exports_1, context_1) {
    "use strict";
    var netherlands;
    var __moduleName = context_1 && context_1.id;
    function getCharValue(char) {
        // if one of these set values
        if (char === '+')
            return 36;
        if (char === '*')
            return 37;
        // if A...Z return code VAL -55
        const code = char.charCodeAt(0) - 55;
        if (code > 9 && code < 91)
            return code;
        return parseInt(char, 10);
    }
    function isNinetySevenMod(value) {
        const remainder = mod(value, 97);
        return remainder === 1;
    }
    // custom module function, to check module on values above Number limit
    function mod(value, divisor) {
        // Initialize result
        let res = 0;
        for (const char of value.split('')) {
            res = (res * 10 + +char) % divisor;
        }
        return res;
    }
    return {
        setters: [],
        execute: function () {
            exports_1("netherlands", netherlands = {
                name: 'Netherlands',
                codes: ['NL', 'NLD', '528'],
                calcFn: (input) => {
                    const vat = input.replace(/[\ \-\_]/g, '').toUpperCase();
                    const { additional, multipliers } = netherlands.rules;
                    if (!additional)
                        return false;
                    const match = vat.match(additional[0]);
                    if (!match || !match[1])
                        return false;
                    const numb = match[1];
                    const characterValues = `NL${vat}`.split('').map(getCharValue);
                    let total = 0;
                    // Extract the next digit and multiply by the counter.
                    for (let i = 0; i < 8; i++) {
                        total += Number(numb.charAt(i)) * multipliers.common[i];
                    }
                    // Establish check digits by getting modulus 11.
                    total = total % 11;
                    if (total > 9) {
                        total = 0;
                    }
                    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                    const expect = Number(numb.slice(8, 9));
                    // is either 11 proof or 97 mod proof.
                    return total === expect || isNinetySevenMod(characterValues.join(''));
                },
                rules: {
                    multipliers: {
                        common: [9, 8, 7, 6, 5, 4, 3, 2]
                    },
                    regex: [/^(NL)(\d{9}B\d{2})$/],
                    additional: [/^(\d{9})B\d{2}$/]
                }
            });
        }
    };
});
