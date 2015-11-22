var expect = require('chai').expect;
var assert = require('chai').assert;
var VatChecker = require('../dist/jsvat.js');

describe("VatChecker", function () {

    describe("Valid countries VAT", function () {

        describe("Austria VAT", function () {
            it("Valid VAT", function () {
                return expect(VatChecker.checkVatNum('ATU00000024')).to.be.true;
            });

            it("Valid VAT with spaces", function () {
                return expect(VatChecker.checkVatNum('ATU 9999 9999')).to.be.true;
            });

            it("Valid VAT with '-'", function () {
                return expect(VatChecker.checkVatNum('ATU-9999-9999')).to.be.true;
            });
        });

        //describe("Belgium VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('BE0999999999')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('BE0999999999')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('BE0999999999')).to.be.true;
        //    });
        //});
        //
        //describe("Bulgaria VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //
        //describe("Switzerland VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Cyprus VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Czech_republic VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Germany VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Denmark VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Estonia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Greece VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Spain_National VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Spain other VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Spain personal 1 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Spain personal 2 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("EU type VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Finland VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("France 1 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("France 2 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("France 3 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("France 4 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("UK standard VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("UK branches VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("UK government VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("UK health authority VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Croatia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Hungary VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Ireland 1 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Ireland 2 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Ireland 3 VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Italy VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Latvia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Lithunia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Luxembourg VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Malta VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Netherlands VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Norway not EU VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Poland VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Portugal VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Romania VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('RO4594917')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('RO 459 491 7')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('RO-459-491-7')).to.be.true;
        //    });
        //});
        //
        //describe("Russia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Serbia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Slovenia VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Slovakia republic VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});
        //
        //describe("Sweden VAT", function () {
        //    it("Valid VAT", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with spaces", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //
        //    it("Valid VAT with '-'", function () {
        //        return expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
        //    });
        //});

    });

    describe("Invalid VAT", function () {

        it("valid invalid VAT", function () {
            return expect(VatChecker.checkVatNum('RO459491721323')).to.be.false;
        });

        it("long string number", function () {
            return expect(VatChecker.checkVatNum('12321323123213456546')).to.be.false;
        });

        it("long digit number", function () {
            return expect(VatChecker.checkVatNum(1123587867867843562321323123213)).to.be.false;
        });

        it("short digit number", function () {
            return expect(VatChecker.checkVatNum(1)).to.be.false;
        });

        it("empty value", function () {
            return expect(VatChecker.checkVatNum()).to.be.false;
        });

        it("empty string value", function () {
            return expect(VatChecker.checkVatNum("")).to.be.false;
        });

    });


});