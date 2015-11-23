var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Serbia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('RS100010812')).to.be.true;
        expect(VatChecker.checkVAT('RS100182160')).to.be.true;
        expect(VatChecker.checkVAT('RS100262959')).to.be.true;
        expect(VatChecker.checkVAT('RS101052694')).to.be.true;
        expect(VatChecker.checkVAT('RS101123484')).to.be.true;
        expect(VatChecker.checkVAT('RS101511068')).to.be.true;
        expect(VatChecker.checkVAT('RS101626723')).to.be.true;
        expect(VatChecker.checkVAT('RS101660236')).to.be.true;
        expect(VatChecker.checkVAT('RS101917688')).to.be.true;
        expect(VatChecker.checkVAT('RS103257368')).to.be.true;
        expect(VatChecker.checkVAT('RS102898984')).to.be.true;
        expect(VatChecker.checkVAT('RS104774509')).to.be.true;
        expect(VatChecker.checkVAT('RS105066236')).to.be.true;
        expect(VatChecker.checkVAT('RS105101011')).to.be.true;
        expect(VatChecker.checkVAT('RS105795301')).to.be.true;
        expect(VatChecker.checkVAT('RS105922971')).to.be.true;
        expect(VatChecker.checkVAT('RS106193133')).to.be.true;
        expect(VatChecker.checkVAT('RS106414286')).to.be.true;
        expect(VatChecker.checkVAT('RS106963932')).to.be.true;
        expect(VatChecker.checkVAT('RS107382147')).to.be.true;
        expect(VatChecker.checkVAT('RS129391320')).to.be.true;
        expect(VatChecker.checkVAT('RS12939132')).to.be.false;
        expect(VatChecker.checkVAT('RS1293913201')).to.be.false;
        expect(VatChecker.checkVAT('RS129391321')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('RS1 015 11068')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('RS101-511-068')).to.be.true;
    });
});