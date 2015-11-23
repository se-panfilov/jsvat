var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Netherlands VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('NL010000446B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000024B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000036B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000048B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000206B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000061B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000073B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000085B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000103B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000115B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000127B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000140B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000152B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000164B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000188B01')).to.be.true;
        expect(VatChecker.checkVAT('NL000000206B01')).to.be.true;
        expect(VatChecker.checkVAT('NL001079293B01')).to.be.true;
        expect(VatChecker.checkVAT('NL001368023B01')).to.be.true;
        expect(VatChecker.checkVAT('NL003156709B01')).to.be.true;
        expect(VatChecker.checkVAT('NL004909665B07')).to.be.true;
        expect(VatChecker.checkVAT('NL005033019B01')).to.be.true;
        expect(VatChecker.checkVAT('NL006292227B01')).to.be.true;
        expect(VatChecker.checkVAT('NL121745417B01')).to.be.true;
        expect(VatChecker.checkVAT('NL128297906B01')).to.be.true;
        expect(VatChecker.checkVAT('NL147804668B01')).to.be.true;
        expect(VatChecker.checkVAT('NL173389909B01')).to.be.true;
        expect(VatChecker.checkVAT('NL208560129B01')).to.be.true;
        expect(VatChecker.checkVAT('NL800272912B01')).to.be.true;
        expect(VatChecker.checkVAT('NL805332674B01')).to.be.true;
        expect(VatChecker.checkVAT('NL805969317B01')).to.be.true;
        expect(VatChecker.checkVAT('NL806825790B01')).to.be.true;
        expect(VatChecker.checkVAT('NL806925206B01')).to.be.true;
        expect(VatChecker.checkVAT('NL809442127B01')).to.be.true;
        expect(VatChecker.checkVAT('NL810195835B01')).to.be.true;
        expect(VatChecker.checkVAT('NL810876334B01')).to.be.true;
        expect(VatChecker.checkVAT('NL813195779B01')).to.be.true;
        expect(VatChecker.checkVAT('NL814170511B01')).to.be.true;
        expect(VatChecker.checkVAT('NL815216002B01')).to.be.true;
        expect(VatChecker.checkVAT('NL815498093B01')).to.be.true;
        expect(VatChecker.checkVAT('NL818152011B01')).to.be.true;
        expect(VatChecker.checkVAT('NL818793120B01')).to.be.true;
        expect(VatChecker.checkVAT('NL818937841B01')).to.be.true;
        expect(VatChecker.checkVAT('NL822502975B01')).to.be.true;
        expect(VatChecker.checkVAT('NL822667800B01')).to.be.true;
        expect(VatChecker.checkVAT('NL822754812B01')).to.be.true;
        expect(VatChecker.checkVAT('NL823363247B01')).to.be.true;
        expect(VatChecker.checkVAT('NL010000445B01')).to.be.false;
        expect(VatChecker.checkVAT('NL000000025B01')).to.be.false;
        expect(VatChecker.checkVAT('NL000000035B01')).to.be.false;
        expect(VatChecker.checkVAT('NL000000045B01')).to.be.false;
        expect(VatChecker.checkVAT('NL000000205B01')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('NL000 00014 0B01')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('NL0000-00140-B01')).to.be.true;
    });
});