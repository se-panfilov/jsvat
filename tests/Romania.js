var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Romania VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('RO4594917')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('RO 459 491 7')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('RO-459-491-7')).to.be.true;
    });
});