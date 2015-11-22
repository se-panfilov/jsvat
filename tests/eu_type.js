var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("EU type VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('EU372000052')).to.be.true;
        expect(VatChecker.checkVatNum('EU826001142')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('EU 8260 01142')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('EU826-001-142')).to.be.true;
    });
});