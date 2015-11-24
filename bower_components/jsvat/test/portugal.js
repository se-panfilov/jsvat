var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Portugal VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('PT100000010')).to.be.true;
        expect(jsvat.checkVAT('PT100000029')).to.be.true;
        expect(jsvat.checkVAT('PT100000037')).to.be.true;
        expect(jsvat.checkVAT('PT100000193')).to.be.true;
        expect(jsvat.checkVAT('PT100000053')).to.be.true;
        expect(jsvat.checkVAT('PT100000061')).to.be.true;
        expect(jsvat.checkVAT('PT100000070')).to.be.true;
        expect(jsvat.checkVAT('PT100000096')).to.be.true;
        expect(jsvat.checkVAT('PT100000100')).to.be.true;
        expect(jsvat.checkVAT('PT100000118')).to.be.true;
        expect(jsvat.checkVAT('PT100000134')).to.be.true;
        expect(jsvat.checkVAT('PT100000142')).to.be.true;
        expect(jsvat.checkVAT('PT100000150')).to.be.true;
        expect(jsvat.checkVAT('PT100000177')).to.be.true;
        expect(jsvat.checkVAT('PT100000185')).to.be.true;
        expect(jsvat.checkVAT('PT100000193')).to.be.true;
        expect(jsvat.checkVAT('PT501413197')).to.be.true;
        expect(jsvat.checkVAT('PT501519246')).to.be.true;
        expect(jsvat.checkVAT('PT501570691')).to.be.true;
        expect(jsvat.checkVAT('PT502011378')).to.be.true;
        expect(jsvat.checkVAT('PT502757191')).to.be.true;
        expect(jsvat.checkVAT('PT502790610')).to.be.true;
        expect(jsvat.checkVAT('PT503079502')).to.be.true;
        expect(jsvat.checkVAT('PT503362999')).to.be.true;
        expect(jsvat.checkVAT('PT503731552')).to.be.true;
        expect(jsvat.checkVAT('PT503701378')).to.be.true;
        expect(jsvat.checkVAT('PT503729108')).to.be.true;
        expect(jsvat.checkVAT('PT504030108')).to.be.true;
        expect(jsvat.checkVAT('PT504141066')).to.be.true;
        expect(jsvat.checkVAT('PT504178873')).to.be.true;
        expect(jsvat.checkVAT('PT504194739')).to.be.true;
        expect(jsvat.checkVAT('PT505289385')).to.be.true;
        expect(jsvat.checkVAT('PT505448173')).to.be.true;
        expect(jsvat.checkVAT('PT505856468')).to.be.true;
        expect(jsvat.checkVAT('PT506429210')).to.be.true;
        expect(jsvat.checkVAT('PT506774287')).to.be.true;
        expect(jsvat.checkVAT('PT507132831')).to.be.true;
        expect(jsvat.checkVAT('PT507400011')).to.be.true;
        expect(jsvat.checkVAT('PT507599470')).to.be.true;
        expect(jsvat.checkVAT('PT507852605')).to.be.true;
        expect(jsvat.checkVAT('PT508219612')).to.be.true;
        expect(jsvat.checkVAT('PT509221785')).to.be.true;
        expect(jsvat.checkVAT('PT509280285')).to.be.true;
        expect(jsvat.checkVAT('PT509626416')).to.be.true;
        expect(jsvat.checkVAT('PT510765009')).to.be.true;
        expect(jsvat.checkVAT('PT980405319')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('PT502757192')).to.be.false;
        expect(jsvat.checkVAT('PT100000012')).to.be.false;
        expect(jsvat.checkVAT('PT100000022')).to.be.false;
        expect(jsvat.checkVAT('PT100000032')).to.be.false;
        expect(jsvat.checkVAT('PT100000192')).to.be.false;
        expect(jsvat.checkVAT('PT100000052')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('PT 100000 118')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('PT10-000-0118')).to.be.true;
    });
});