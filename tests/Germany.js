var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Germany VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('DE111111125')).to.be.true;
        expect(VatChecker.checkVatNum('DE113298780')).to.be.true;
        expect(VatChecker.checkVatNum('DE113891176')).to.be.true;
        expect(VatChecker.checkVatNum('DE114189102')).to.be.true;
        expect(VatChecker.checkVatNum('DE119429301')).to.be.true;
        expect(VatChecker.checkVatNum('DE122119035')).to.be.true;
        expect(VatChecker.checkVatNum('DE126639095')).to.be.true;
        expect(VatChecker.checkVatNum('DE126823642')).to.be.true;
        expect(VatChecker.checkVatNum('DE128575725')).to.be.true;
        expect(VatChecker.checkVatNum('DE128936602')).to.be.true;
        expect(VatChecker.checkVatNum('DE129516430')).to.be.true;
        expect(VatChecker.checkVatNum('DE130502536')).to.be.true;
        expect(VatChecker.checkVatNum('DE132507686')).to.be.true;
        expect(VatChecker.checkVatNum('DE136695976')).to.be.true;
        expect(VatChecker.checkVatNum('DE138263821')).to.be.true;
        expect(VatChecker.checkVatNum('DE138497248')).to.be.true;
        expect(VatChecker.checkVatNum('DE142930777')).to.be.true;
        expect(VatChecker.checkVatNum('DE145141525')).to.be.true;
        expect(VatChecker.checkVatNum('DE145146812')).to.be.true;
        expect(VatChecker.checkVatNum('DE146624530')).to.be.true;
        expect(VatChecker.checkVatNum('DE160459932')).to.be.true;
        expect(VatChecker.checkVatNum('DE184543132')).to.be.true;
        expect(VatChecker.checkVatNum('DE199085992')).to.be.true;
        expect(VatChecker.checkVatNum('DE126563585')).to.be.true;
        expect(VatChecker.checkVatNum('DE203159652')).to.be.true;
        expect(VatChecker.checkVatNum('DE220709071')).to.be.true;
        expect(VatChecker.checkVatNum('DE247139684')).to.be.true;
        expect(VatChecker.checkVatNum('DE252429421')).to.be.true;
        expect(VatChecker.checkVatNum('DE256319655')).to.be.true;
        expect(VatChecker.checkVatNum('DE262044136')).to.be.true;
        expect(VatChecker.checkVatNum('DE282741168')).to.be.true;
        expect(VatChecker.checkVatNum('DE811209378')).to.be.true;
        expect(VatChecker.checkVatNum('DE811363057')).to.be.true;
        expect(VatChecker.checkVatNum('DE812321109')).to.be.true;
        expect(VatChecker.checkVatNum('DE812529243')).to.be.true;
        expect(VatChecker.checkVatNum('DE813030375')).to.be.true;
        expect(VatChecker.checkVatNum('DE813189177')).to.be.true;
        expect(VatChecker.checkVatNum('DE813232162')).to.be.true;
        expect(VatChecker.checkVatNum('DE813261484')).to.be.true;
        expect(VatChecker.checkVatNum('DE813495425')).to.be.true;
        expect(VatChecker.checkVatNum('DE111111126')).to.be.false;
        expect(VatChecker.checkVatNum('DE111111127')).to.be.false;
        expect(VatChecker.checkVatNum('DE111111128')).to.be.false;
        expect(VatChecker.checkVatNum('DE111111129')).to.be.false;
        expect(VatChecker.checkVatNum('DE111111120')).to.be.false;
        expect(VatChecker.checkVatNum('DE111111121')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000020')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000038')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000046')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000206')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000062')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000079')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000087')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000100')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000118')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000126')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000142')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000159')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000167')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000183')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000191')).to.be.false;
        expect(VatChecker.checkVatNum('DE000000206')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});