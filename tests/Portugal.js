var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Portugal VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('PT100000010')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000029')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000037')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000193')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000053')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000061')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000070')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000096')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000100')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000118')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000134')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000142')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000150')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000177')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000185')).to.be.true;
        expect(VatChecker.checkVatNum('PT100000193')).to.be.true;
        expect(VatChecker.checkVatNum('PT501413197')).to.be.true;
        expect(VatChecker.checkVatNum('PT501519246')).to.be.true;
        expect(VatChecker.checkVatNum('PT501570691')).to.be.true;
        expect(VatChecker.checkVatNum('PT502011378')).to.be.true;
        expect(VatChecker.checkVatNum('PT502757191')).to.be.true;
        expect(VatChecker.checkVatNum('PT502790610')).to.be.true;
        expect(VatChecker.checkVatNum('PT503079502')).to.be.true;
        expect(VatChecker.checkVatNum('PT503362999')).to.be.true;
        expect(VatChecker.checkVatNum('PT503731552')).to.be.true;
        expect(VatChecker.checkVatNum('PT503701378')).to.be.true;
        expect(VatChecker.checkVatNum('PT503729108')).to.be.true;
        expect(VatChecker.checkVatNum('PT504030108')).to.be.true;
        expect(VatChecker.checkVatNum('PT504141066')).to.be.true;
        expect(VatChecker.checkVatNum('PT504178873')).to.be.true;
        expect(VatChecker.checkVatNum('PT504194739')).to.be.true;
        expect(VatChecker.checkVatNum('PT505289385')).to.be.true;
        expect(VatChecker.checkVatNum('PT505448173')).to.be.true;
        expect(VatChecker.checkVatNum('PT505856468')).to.be.true;
        expect(VatChecker.checkVatNum('PT506429210')).to.be.true;
        expect(VatChecker.checkVatNum('PT506774287')).to.be.true;
        expect(VatChecker.checkVatNum('PT507132831')).to.be.true;
        expect(VatChecker.checkVatNum('PT507400011')).to.be.true;
        expect(VatChecker.checkVatNum('PT507599470')).to.be.true;
        expect(VatChecker.checkVatNum('PT507852605')).to.be.true;
        expect(VatChecker.checkVatNum('PT508219612')).to.be.true;
        expect(VatChecker.checkVatNum('PT509221785')).to.be.true;
        expect(VatChecker.checkVatNum('PT509280285')).to.be.true;
        expect(VatChecker.checkVatNum('PT509626416')).to.be.true;
        expect(VatChecker.checkVatNum('PT510765009')).to.be.true;
        expect(VatChecker.checkVatNum('PT980405319')).to.be.true;
        expect(VatChecker.checkVatNum('PT502757192')).to.be.false;
        expect(VatChecker.checkVatNum('PT100000012')).to.be.false;
        expect(VatChecker.checkVatNum('PT100000022')).to.be.false;
        expect(VatChecker.checkVatNum('PT100000032')).to.be.false;
        expect(VatChecker.checkVatNum('PT100000192')).to.be.false;
        expect(VatChecker.checkVatNum('PT100000052')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('PT 100000 118')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('PT10-000-0118')).to.be.true;
    });
});