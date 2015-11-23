var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("EU type VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('EU372000052')).to.be.true;
        expect(VatChecker.checkVAT('EU826001142')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('EU 8260 01142')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('EU826-001-142')).to.be.true;
    });
});