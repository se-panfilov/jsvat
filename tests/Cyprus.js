var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Cyprus VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('CY00001067Y')).to.be.true;
        expect(VatChecker.checkVatNum('CY00376309R')).to.be.true;
        expect(VatChecker.checkVatNum('CY00506026O')).to.be.true;
        expect(VatChecker.checkVatNum('CY00709533C')).to.be.true;
        expect(VatChecker.checkVatNum('CY00714754A')).to.be.true;
        expect(VatChecker.checkVatNum('CY10000314J')).to.be.true;
        expect(VatChecker.checkVatNum('CY10000463Y')).to.be.true;
        expect(VatChecker.checkVatNum('CY10008146K')).to.be.true;
        expect(VatChecker.checkVatNum('CY10018402C')).to.be.true;
        expect(VatChecker.checkVatNum('CY10008489A')).to.be.true;
        expect(VatChecker.checkVatNum('CY10030661B')).to.be.true;
        expect(VatChecker.checkVatNum('CY10030954F')).to.be.true;
        expect(VatChecker.checkVatNum('CY10111176Z')).to.be.true;
        expect(VatChecker.checkVatNum('CY10111474A')).to.be.true;
        expect(VatChecker.checkVatNum('CY10272781S')).to.be.true;
        expect(VatChecker.checkVatNum('CY10283929R')).to.be.true;
        expect(VatChecker.checkVatNum('CY10156988E')).to.be.true;
        expect(VatChecker.checkVatNum('CY10157423I')).to.be.true;
        expect(VatChecker.checkVatNum('CY10165829P')).to.be.true;
        expect(VatChecker.checkVatNum('CY10166866Y')).to.be.true;
        expect(VatChecker.checkVatNum('CY10173610U')).to.be.true;
        expect(VatChecker.checkVatNum('CY10188550T')).to.be.true;
        expect(VatChecker.checkVatNum('CY10221051V')).to.be.true;
        expect(VatChecker.checkVatNum('CY10227520I')).to.be.true;
        expect(VatChecker.checkVatNum('CY10231803U')).to.be.true;
        expect(VatChecker.checkVatNum('CY10244276R')).to.be.true;
        expect(VatChecker.checkVatNum('CY10247148S')).to.be.true;
        expect(VatChecker.checkVatNum('CY10259033P')).to.be.true;
        expect(VatChecker.checkVatNum('CY10259584H')).to.be.true;
        expect(VatChecker.checkVatNum('CY10265331J')).to.be.true;
        expect(VatChecker.checkVatNum('CY10269393H')).to.be.true;
        expect(VatChecker.checkVatNum('CY10272781S')).to.be.true;
        expect(VatChecker.checkVatNum('CY10274481T')).to.be.true;
        expect(VatChecker.checkVatNum('CY10110278D')).to.be.true;
        expect(VatChecker.checkVatNum('CY30009560X')).to.be.true;
        expect(VatChecker.checkVatNum('CY90000265T')).to.be.true;
        expect(VatChecker.checkVatNum('CY90000448S')).to.be.true;
        expect(VatChecker.checkVatNum('CY90002066W')).to.be.true;
        expect(VatChecker.checkVatNum('CY99000027S')).to.be.true;
        expect(VatChecker.checkVatNum('CY99200002N')).to.be.true;
        expect(VatChecker.checkVatNum('CY0')).to.be.false;
        expect(VatChecker.checkVatNum('CY00000000W')).to.be.false;
        expect(VatChecker.checkVatNum('CY12000000C')).to.be.false;
        expect(VatChecker.checkVatNum('CY12000139V')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('CY 101885 50T')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('CY101-885-50T')).to.be.true;
    });
});