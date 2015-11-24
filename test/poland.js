var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Poland VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('PL1132191233')).to.be.true;
        expect(VatChecker.checkVAT('PL1181092318')).to.be.true;
        expect(VatChecker.checkVAT('PL5210088067')).to.be.true;
        expect(VatChecker.checkVAT('PL5221008534')).to.be.true;
        expect(VatChecker.checkVAT('PL5222349705')).to.be.true;
        expect(VatChecker.checkVAT('PL5222762925')).to.be.true;
        expect(VatChecker.checkVAT('PL5222897588')).to.be.true;
        expect(VatChecker.checkVAT('PL5240303547')).to.be.true;
        expect(VatChecker.checkVAT('PL5242718991')).to.be.true;
        expect(VatChecker.checkVAT('PL5252248481')).to.be.true;
        expect(VatChecker.checkVAT('PL5260006841')).to.be.true;
        expect(VatChecker.checkVAT('PL5260033950')).to.be.true;
        expect(VatChecker.checkVAT('PL5260204995')).to.be.true;
        expect(VatChecker.checkVAT('PL5260250274')).to.be.true;
        expect(VatChecker.checkVAT('PL5260300724')).to.be.true;
        expect(VatChecker.checkVAT('PL5262493733')).to.be.true;
        expect(VatChecker.checkVAT('PL5262816171')).to.be.true;
        expect(VatChecker.checkVAT('PL5262823001')).to.be.true;
        expect(VatChecker.checkVAT('PL5262823001')).to.be.true;
        expect(VatChecker.checkVAT('PL5270023255')).to.be.true;
        expect(VatChecker.checkVAT('PL5270009261')).to.be.true;
        expect(VatChecker.checkVAT('PL5270204212')).to.be.true;
        expect(VatChecker.checkVAT('PL5272525794')).to.be.true;
        expect(VatChecker.checkVAT('PL5272527149')).to.be.true;
        expect(VatChecker.checkVAT('PL5272548269')).to.be.true;
        expect(VatChecker.checkVAT('PL5841896486')).to.be.true;
        expect(VatChecker.checkVAT('PL5851408413')).to.be.true;
        expect(VatChecker.checkVAT('PL5860017014')).to.be.true;
        expect(VatChecker.checkVAT('PL6570006959')).to.be.true;
        expect(VatChecker.checkVAT('PL6571225764')).to.be.true;
        expect(VatChecker.checkVAT('PL6751330882')).to.be.true;
        expect(VatChecker.checkVAT('PL6762017752')).to.be.true;
        expect(VatChecker.checkVAT('PL6912393587')).to.be.true;
        expect(VatChecker.checkVAT('PL6922253959')).to.be.true;
        expect(VatChecker.checkVAT('PL7010009325')).to.be.true;
        expect(VatChecker.checkVAT('PL7122913627')).to.be.true;
        expect(VatChecker.checkVAT('PL7712761851')).to.be.true;
        expect(VatChecker.checkVAT('PL7780001070')).to.be.true;
        expect(VatChecker.checkVAT('PL7792048522')).to.be.true;
        expect(VatChecker.checkVAT('PL8392919362')).to.be.true;
        expect(VatChecker.checkVAT('PL9371000329')).to.be.true;
        expect(VatChecker.checkVAT('PL9512293636')).to.be.true;
        expect(VatChecker.checkVAT('PL9562180153')).to.be.true;
        expect(VatChecker.checkVAT('PL9691068493')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('PL7122913628')).to.be.false;
        expect(VatChecker.checkVAT('PL7122913427')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('PL5 260 006841')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('PL52600-068-41')).to.be.true;
    });
});