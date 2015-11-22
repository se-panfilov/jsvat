var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Denmark VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('DK10000009')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000017')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000025')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000157')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000033')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000041')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000068')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000076')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000084')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000092')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000106')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000114')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000122')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000130')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000149')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000157')).to.be.true;
        expect(VatChecker.checkVatNum('DK12935110')).to.be.true;
        expect(VatChecker.checkVatNum('DK18424649')).to.be.true;
        expect(VatChecker.checkVatNum('DK18630036')).to.be.true;
        expect(VatChecker.checkVatNum('DK19475298')).to.be.true;
        expect(VatChecker.checkVatNum('DK20214414')).to.be.true;
        expect(VatChecker.checkVatNum('DK20342781')).to.be.true;
        expect(VatChecker.checkVatNum('DK21659509')).to.be.true;
        expect(VatChecker.checkVatNum('DK25160924')).to.be.true;
        expect(VatChecker.checkVatNum('DK25760352')).to.be.true;
        expect(VatChecker.checkVatNum('DK25763858')).to.be.true;
        expect(VatChecker.checkVatNum('DK26134439')).to.be.true;
        expect(VatChecker.checkVatNum('DK27509185')).to.be.true;
        expect(VatChecker.checkVatNum('DK27919502')).to.be.true;
        expect(VatChecker.checkVatNum('DK28323271')).to.be.true;
        expect(VatChecker.checkVatNum('DK28702612')).to.be.true;
        expect(VatChecker.checkVatNum('DK29189757')).to.be.true;
        expect(VatChecker.checkVatNum('DK29206600')).to.be.true;
        expect(VatChecker.checkVatNum('DK29283958')).to.be.true;
        expect(VatChecker.checkVatNum('DK30559150')).to.be.true;
        expect(VatChecker.checkVatNum('DK31119103')).to.be.true;
        expect(VatChecker.checkVatNum('DK32569943')).to.be.true;
        expect(VatChecker.checkVatNum('DK32780806')).to.be.true;
        expect(VatChecker.checkVatNum('DK33266022')).to.be.true;
        expect(VatChecker.checkVatNum('DK37131415')).to.be.true;
        expect(VatChecker.checkVatNum('DK44023911')).to.be.true;
        expect(VatChecker.checkVatNum('DK67758919')).to.be.true;
        expect(VatChecker.checkVatNum('DK71186911')).to.be.true;
        expect(VatChecker.checkVatNum('DK75142412')).to.be.true;
        expect(VatChecker.checkVatNum('DK78805218')).to.be.true;
        expect(VatChecker.checkVatNum('DK10000000')).to.be.false;
        expect(VatChecker.checkVatNum('DK10000010')).to.be.false;
        expect(VatChecker.checkVatNum('DK10000020')).to.be.false;
        expect(VatChecker.checkVatNum('DK10000150')).to.be.false;
        expect(VatChecker.checkVatNum('DK10000030')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('DK 2918 9757')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('DK2-9189-757')).to.be.true;
    });
});