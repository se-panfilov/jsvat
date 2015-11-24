var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Denmark VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('DK10000009')).to.be.true;
        expect(jsvat.checkVAT('DK10000017')).to.be.true;
        expect(jsvat.checkVAT('DK10000025')).to.be.true;
        expect(jsvat.checkVAT('DK10000157')).to.be.true;
        expect(jsvat.checkVAT('DK10000033')).to.be.true;
        expect(jsvat.checkVAT('DK10000041')).to.be.true;
        expect(jsvat.checkVAT('DK10000068')).to.be.true;
        expect(jsvat.checkVAT('DK10000076')).to.be.true;
        expect(jsvat.checkVAT('DK10000084')).to.be.true;
        expect(jsvat.checkVAT('DK10000092')).to.be.true;
        expect(jsvat.checkVAT('DK10000106')).to.be.true;
        expect(jsvat.checkVAT('DK10000114')).to.be.true;
        expect(jsvat.checkVAT('DK10000122')).to.be.true;
        expect(jsvat.checkVAT('DK10000130')).to.be.true;
        expect(jsvat.checkVAT('DK10000149')).to.be.true;
        expect(jsvat.checkVAT('DK10000157')).to.be.true;
        expect(jsvat.checkVAT('DK12935110')).to.be.true;
        expect(jsvat.checkVAT('DK18424649')).to.be.true;
        expect(jsvat.checkVAT('DK18630036')).to.be.true;
        expect(jsvat.checkVAT('DK19475298')).to.be.true;
        expect(jsvat.checkVAT('DK20214414')).to.be.true;
        expect(jsvat.checkVAT('DK20342781')).to.be.true;
        expect(jsvat.checkVAT('DK21659509')).to.be.true;
        expect(jsvat.checkVAT('DK25160924')).to.be.true;
        expect(jsvat.checkVAT('DK25760352')).to.be.true;
        expect(jsvat.checkVAT('DK25763858')).to.be.true;
        expect(jsvat.checkVAT('DK26134439')).to.be.true;
        expect(jsvat.checkVAT('DK27509185')).to.be.true;
        expect(jsvat.checkVAT('DK27919502')).to.be.true;
        expect(jsvat.checkVAT('DK28323271')).to.be.true;
        expect(jsvat.checkVAT('DK28702612')).to.be.true;
        expect(jsvat.checkVAT('DK29189757')).to.be.true;
        expect(jsvat.checkVAT('DK29206600')).to.be.true;
        expect(jsvat.checkVAT('DK29283958')).to.be.true;
        expect(jsvat.checkVAT('DK30559150')).to.be.true;
        expect(jsvat.checkVAT('DK31119103')).to.be.true;
        expect(jsvat.checkVAT('DK32569943')).to.be.true;
        expect(jsvat.checkVAT('DK32780806')).to.be.true;
        expect(jsvat.checkVAT('DK33266022')).to.be.true;
        expect(jsvat.checkVAT('DK37131415')).to.be.true;
        expect(jsvat.checkVAT('DK44023911')).to.be.true;
        expect(jsvat.checkVAT('DK67758919')).to.be.true;
        expect(jsvat.checkVAT('DK71186911')).to.be.true;
        expect(jsvat.checkVAT('DK75142412')).to.be.true;
        expect(jsvat.checkVAT('DK78805218')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('DK10000000')).to.be.false;
        expect(jsvat.checkVAT('DK10000010')).to.be.false;
        expect(jsvat.checkVAT('DK10000020')).to.be.false;
        expect(jsvat.checkVAT('DK10000150')).to.be.false;
        expect(jsvat.checkVAT('DK10000030')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('DK 2918 9757')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('DK2-9189-757')).to.be.true;
    });
});