var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Serbia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('RS100010812')).to.be.true;
        expect(VatChecker.checkVatNum('RS100182160')).to.be.true;
        expect(VatChecker.checkVatNum('RS100262959')).to.be.true;
        expect(VatChecker.checkVatNum('RS101052694')).to.be.true;
        expect(VatChecker.checkVatNum('RS101123484')).to.be.true;
        expect(VatChecker.checkVatNum('RS101511068')).to.be.true;
        expect(VatChecker.checkVatNum('RS101626723')).to.be.true;
        expect(VatChecker.checkVatNum('RS101660236')).to.be.true;
        expect(VatChecker.checkVatNum('RS101917688')).to.be.true;
        expect(VatChecker.checkVatNum('RS103257368')).to.be.true;
        expect(VatChecker.checkVatNum('RS102898984')).to.be.true;
        expect(VatChecker.checkVatNum('RS104774509')).to.be.true;
        expect(VatChecker.checkVatNum('RS105066236')).to.be.true;
        expect(VatChecker.checkVatNum('RS105101011')).to.be.true;
        expect(VatChecker.checkVatNum('RS105795301')).to.be.true;
        expect(VatChecker.checkVatNum('RS105922971')).to.be.true;
        expect(VatChecker.checkVatNum('RS106193133')).to.be.true;
        expect(VatChecker.checkVatNum('RS106414286')).to.be.true;
        expect(VatChecker.checkVatNum('RS106963932')).to.be.true;
        expect(VatChecker.checkVatNum('RS107382147')).to.be.true;
        expect(VatChecker.checkVatNum('RS129391320')).to.be.true;
        expect(VatChecker.checkVatNum('RS12939132')).to.be.false;
        expect(VatChecker.checkVatNum('RS1293913201')).to.be.false;
        expect(VatChecker.checkVatNum('RS129391321')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});