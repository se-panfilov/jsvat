var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Invalid VAT", function () {

    it("valid invalid VAT", function () {
        expect(VatChecker.checkVAT('RO459491721323')).to.be.false;
    });

    it("long string number", function () {
        expect(VatChecker.checkVAT('12321323123213456546')).to.be.false;
    });

    it("long digit number", function () {
        expect(VatChecker.checkVAT(1123587867867843562321323123213)).to.be.false;
    });

    it("short digit number", function () {
        expect(VatChecker.checkVAT(1)).to.be.false;
    });

    it("empty value", function () {
        expect(VatChecker.checkVAT()).to.be.false;
    });

    it("empty string value", function () {
        expect(VatChecker.checkVAT("")).to.be.false;
    });
});
