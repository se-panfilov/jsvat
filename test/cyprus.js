var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Cyprus VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('CY00001067Y')).to.be.true;
        expect(VatChecker.checkVAT('CY00376309R')).to.be.true;
        expect(VatChecker.checkVAT('CY00506026O')).to.be.true;
        expect(VatChecker.checkVAT('CY00709533C')).to.be.true;
        expect(VatChecker.checkVAT('CY00714754A')).to.be.true;
        expect(VatChecker.checkVAT('CY10000314J')).to.be.true;
        expect(VatChecker.checkVAT('CY10000463Y')).to.be.true;
        expect(VatChecker.checkVAT('CY10008146K')).to.be.true;
        expect(VatChecker.checkVAT('CY10018402C')).to.be.true;
        expect(VatChecker.checkVAT('CY10008489A')).to.be.true;
        expect(VatChecker.checkVAT('CY10030661B')).to.be.true;
        expect(VatChecker.checkVAT('CY10030954F')).to.be.true;
        expect(VatChecker.checkVAT('CY10111176Z')).to.be.true;
        expect(VatChecker.checkVAT('CY10111474A')).to.be.true;
        expect(VatChecker.checkVAT('CY10272781S')).to.be.true;
        expect(VatChecker.checkVAT('CY10283929R')).to.be.true;
        expect(VatChecker.checkVAT('CY10156988E')).to.be.true;
        expect(VatChecker.checkVAT('CY10157423I')).to.be.true;
        expect(VatChecker.checkVAT('CY10165829P')).to.be.true;
        expect(VatChecker.checkVAT('CY10166866Y')).to.be.true;
        expect(VatChecker.checkVAT('CY10173610U')).to.be.true;
        expect(VatChecker.checkVAT('CY10188550T')).to.be.true;
        expect(VatChecker.checkVAT('CY10221051V')).to.be.true;
        expect(VatChecker.checkVAT('CY10227520I')).to.be.true;
        expect(VatChecker.checkVAT('CY10231803U')).to.be.true;
        expect(VatChecker.checkVAT('CY10244276R')).to.be.true;
        expect(VatChecker.checkVAT('CY10247148S')).to.be.true;
        expect(VatChecker.checkVAT('CY10259033P')).to.be.true;
        expect(VatChecker.checkVAT('CY10259584H')).to.be.true;
        expect(VatChecker.checkVAT('CY10265331J')).to.be.true;
        expect(VatChecker.checkVAT('CY10269393H')).to.be.true;
        expect(VatChecker.checkVAT('CY10272781S')).to.be.true;
        expect(VatChecker.checkVAT('CY10274481T')).to.be.true;
        expect(VatChecker.checkVAT('CY10110278D')).to.be.true;
        expect(VatChecker.checkVAT('CY30009560X')).to.be.true;
        expect(VatChecker.checkVAT('CY90000265T')).to.be.true;
        expect(VatChecker.checkVAT('CY90000448S')).to.be.true;
        expect(VatChecker.checkVAT('CY90002066W')).to.be.true;
        expect(VatChecker.checkVAT('CY99000027S')).to.be.true;
        expect(VatChecker.checkVAT('CY99200002N')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('CY0')).to.be.false;
        expect(VatChecker.checkVAT('CY00000000W')).to.be.false;
        expect(VatChecker.checkVAT('CY12000000C')).to.be.false;
        expect(VatChecker.checkVAT('CY12000139V')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('CY 101885 50T')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('CY101-885-50T')).to.be.true;
    });
});