var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Germany VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('DE111111125')).to.be.true;
        expect(VatChecker.checkVAT('DE113298780')).to.be.true;
        expect(VatChecker.checkVAT('DE113891176')).to.be.true;
        expect(VatChecker.checkVAT('DE114189102')).to.be.true;
        expect(VatChecker.checkVAT('DE119429301')).to.be.true;
        expect(VatChecker.checkVAT('DE122119035')).to.be.true;
        expect(VatChecker.checkVAT('DE126639095')).to.be.true;
        expect(VatChecker.checkVAT('DE126823642')).to.be.true;
        expect(VatChecker.checkVAT('DE128575725')).to.be.true;
        expect(VatChecker.checkVAT('DE128936602')).to.be.true;
        expect(VatChecker.checkVAT('DE129516430')).to.be.true;
        expect(VatChecker.checkVAT('DE130502536')).to.be.true;
        expect(VatChecker.checkVAT('DE132507686')).to.be.true;
        expect(VatChecker.checkVAT('DE136695976')).to.be.true;
        expect(VatChecker.checkVAT('DE138263821')).to.be.true;
        expect(VatChecker.checkVAT('DE138497248')).to.be.true;
        expect(VatChecker.checkVAT('DE142930777')).to.be.true;
        expect(VatChecker.checkVAT('DE145141525')).to.be.true;
        expect(VatChecker.checkVAT('DE145146812')).to.be.true;
        expect(VatChecker.checkVAT('DE146624530')).to.be.true;
        expect(VatChecker.checkVAT('DE160459932')).to.be.true;
        expect(VatChecker.checkVAT('DE184543132')).to.be.true;
        expect(VatChecker.checkVAT('DE199085992')).to.be.true;
        expect(VatChecker.checkVAT('DE126563585')).to.be.true;
        expect(VatChecker.checkVAT('DE203159652')).to.be.true;
        expect(VatChecker.checkVAT('DE220709071')).to.be.true;
        expect(VatChecker.checkVAT('DE247139684')).to.be.true;
        expect(VatChecker.checkVAT('DE252429421')).to.be.true;
        expect(VatChecker.checkVAT('DE256319655')).to.be.true;
        expect(VatChecker.checkVAT('DE262044136')).to.be.true;
        expect(VatChecker.checkVAT('DE282741168')).to.be.true;
        expect(VatChecker.checkVAT('DE811209378')).to.be.true;
        expect(VatChecker.checkVAT('DE811363057')).to.be.true;
        expect(VatChecker.checkVAT('DE812321109')).to.be.true;
        expect(VatChecker.checkVAT('DE812529243')).to.be.true;
        expect(VatChecker.checkVAT('DE813030375')).to.be.true;
        expect(VatChecker.checkVAT('DE813189177')).to.be.true;
        expect(VatChecker.checkVAT('DE813232162')).to.be.true;
        expect(VatChecker.checkVAT('DE813261484')).to.be.true;
        expect(VatChecker.checkVAT('DE813495425')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('DE111111126')).to.be.false;
        expect(VatChecker.checkVAT('DE111111127')).to.be.false;
        expect(VatChecker.checkVAT('DE111111128')).to.be.false;
        expect(VatChecker.checkVAT('DE111111129')).to.be.false;
        expect(VatChecker.checkVAT('DE111111120')).to.be.false;
        expect(VatChecker.checkVAT('DE111111121')).to.be.false;
        expect(VatChecker.checkVAT('DE000000020')).to.be.false;
        expect(VatChecker.checkVAT('DE000000038')).to.be.false;
        expect(VatChecker.checkVAT('DE000000046')).to.be.false;
        expect(VatChecker.checkVAT('DE000000206')).to.be.false;
        expect(VatChecker.checkVAT('DE000000062')).to.be.false;
        expect(VatChecker.checkVAT('DE000000079')).to.be.false;
        expect(VatChecker.checkVAT('DE000000087')).to.be.false;
        expect(VatChecker.checkVAT('DE000000100')).to.be.false;
        expect(VatChecker.checkVAT('DE000000118')).to.be.false;
        expect(VatChecker.checkVAT('DE000000126')).to.be.false;
        expect(VatChecker.checkVAT('DE000000142')).to.be.false;
        expect(VatChecker.checkVAT('DE000000159')).to.be.false;
        expect(VatChecker.checkVAT('DE000000167')).to.be.false;
        expect(VatChecker.checkVAT('DE000000183')).to.be.false;
        expect(VatChecker.checkVAT('DE000000191')).to.be.false;
        expect(VatChecker.checkVAT('DE000000206')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('DE 142930 777')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('DE1-42930-777')).to.be.true;
    });
});