var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Netherlands VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('NL010000446B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000024B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000036B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000048B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000206B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000061B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000073B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000085B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000103B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000115B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000127B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000140B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000152B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000164B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000188B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL000000206B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL001079293B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL001368023B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL003156709B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL004909665B07')).to.be.true;
        expect(VatChecker.checkVatNum('NL005033019B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL006292227B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL121745417B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL128297906B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL147804668B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL173389909B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL208560129B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL800272912B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL805332674B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL805969317B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL806825790B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL806925206B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL809442127B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL810195835B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL810876334B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL813195779B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL814170511B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL815216002B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL815498093B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL818152011B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL818793120B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL818937841B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL822502975B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL822667800B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL822754812B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL823363247B01')).to.be.true;
        expect(VatChecker.checkVatNum('NL010000445B01')).to.be.false;
        expect(VatChecker.checkVatNum('NL000000025B01')).to.be.false;
        expect(VatChecker.checkVatNum('NL000000035B01')).to.be.false;
        expect(VatChecker.checkVatNum('NL000000045B01')).to.be.false;
        expect(VatChecker.checkVatNum('NL000000205B01')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('NL000 00014 0B01')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('NL0000-00140-B01')).to.be.true;
    });
});