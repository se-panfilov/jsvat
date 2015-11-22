var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Finland VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('FI09853608')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000027')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000035')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000043')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000174')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000078')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000086')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000094')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000115')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000123')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000131')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000166')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000174')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000182')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000203')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000211')).to.be.true;
        expect(VatChecker.checkVatNum('FI00000238')).to.be.true;
        expect(VatChecker.checkVatNum('FI01244162')).to.be.true;
        expect(VatChecker.checkVatNum('FI02459042')).to.be.true;
        expect(VatChecker.checkVatNum('FI06312080')).to.be.true;
        expect(VatChecker.checkVatNum('FI08405256')).to.be.true;
        expect(VatChecker.checkVatNum('FI09441865')).to.be.true;
        expect(VatChecker.checkVatNum('FI08326937')).to.be.true;
        expect(VatChecker.checkVatNum('FI10154054')).to.be.true;
        expect(VatChecker.checkVatNum('FI10227508')).to.be.true;
        expect(VatChecker.checkVatNum('FI15380325')).to.be.true;
        expect(VatChecker.checkVatNum('FI15501019')).to.be.true;
        expect(VatChecker.checkVatNum('FI15482348')).to.be.true;
        expect(VatChecker.checkVatNum('FI15719544')).to.be.true;
        expect(VatChecker.checkVatNum('FI16802358')).to.be.true;
        expect(VatChecker.checkVatNum('FI17377883')).to.be.true;
        expect(VatChecker.checkVatNum('FI17405469')).to.be.true;
        expect(VatChecker.checkVatNum('FI17764656')).to.be.true;
        expect(VatChecker.checkVatNum('FI18261444')).to.be.true;
        expect(VatChecker.checkVatNum('FI18919760')).to.be.true;
        expect(VatChecker.checkVatNum('FI20303674')).to.be.true;
        expect(VatChecker.checkVatNum('FI21044950')).to.be.true;
        expect(VatChecker.checkVatNum('FI22780669')).to.be.true;
        expect(VatChecker.checkVatNum('FI22811357')).to.be.true;
        expect(VatChecker.checkVatNum('FI22283574')).to.be.true;
        expect(VatChecker.checkVatNum('FI22969621')).to.be.true;
        expect(VatChecker.checkVatNum('FI22975669')).to.be.true;
        expect(VatChecker.checkVatNum('FI24498085')).to.be.true;
        expect(VatChecker.checkVatNum('FI24710461')).to.be.true;
        expect(VatChecker.checkVatNum('FI09853601')).to.be.false;
        expect(VatChecker.checkVatNum('FI00000023')).to.be.false;
        expect(VatChecker.checkVatNum('FI00000036')).to.be.false;
        expect(VatChecker.checkVatNum('FI00000048')).to.be.false;
        expect(VatChecker.checkVatNum('FI00000173')).to.be.false;
        expect(VatChecker.checkVatNum('FI00000071')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('FI22 969 621')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('FI2-29696-21')).to.be.true;
    });
});