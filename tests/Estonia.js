var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Estonia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('EE100007796')).to.be.true;
        expect(VatChecker.checkVatNum('EE100014404')).to.be.true;
        expect(VatChecker.checkVatNum('EE100037342')).to.be.true;
        expect(VatChecker.checkVatNum('EE100050879')).to.be.true;
        expect(VatChecker.checkVatNum('EE100050989')).to.be.true;
        expect(VatChecker.checkVatNum('EE100054752')).to.be.true;
        expect(VatChecker.checkVatNum('EE100067066')).to.be.true;
        expect(VatChecker.checkVatNum('EE100183238')).to.be.true;
        expect(VatChecker.checkVatNum('EE100196403')).to.be.true;
        expect(VatChecker.checkVatNum('EE100207415')).to.be.true;
        expect(VatChecker.checkVatNum('EE100210457')).to.be.true;
        expect(VatChecker.checkVatNum('EE100229859')).to.be.true;
        expect(VatChecker.checkVatNum('EE100235791')).to.be.true;
        expect(VatChecker.checkVatNum('EE100338245')).to.be.true;
        expect(VatChecker.checkVatNum('EE100396999')).to.be.true;
        expect(VatChecker.checkVatNum('EE100402498')).to.be.true;
        expect(VatChecker.checkVatNum('EE100434084')).to.be.true;
        expect(VatChecker.checkVatNum('EE100461536')).to.be.true;
        expect(VatChecker.checkVatNum('EE100619906')).to.be.true;
        expect(VatChecker.checkVatNum('EE100645682')).to.be.true;
        expect(VatChecker.checkVatNum('EE100660230')).to.be.true;
        expect(VatChecker.checkVatNum('EE100672736')).to.be.true;
        expect(VatChecker.checkVatNum('EE100691542')).to.be.true;
        expect(VatChecker.checkVatNum('EE100692266')).to.be.true;
        expect(VatChecker.checkVatNum('EE100069349')).to.be.true;
        expect(VatChecker.checkVatNum('EE100715473')).to.be.true;
        expect(VatChecker.checkVatNum('EE100721878')).to.be.true;
        expect(VatChecker.checkVatNum('EE100818723')).to.be.true;
        expect(VatChecker.checkVatNum('EE100900754')).to.be.true;
        expect(VatChecker.checkVatNum('EE100945641')).to.be.true;
        expect(VatChecker.checkVatNum('EE101007643')).to.be.true;
        expect(VatChecker.checkVatNum('EE101039763')).to.be.true;
        expect(VatChecker.checkVatNum('EE101193861')).to.be.true;
        expect(VatChecker.checkVatNum('EE101246514')).to.be.true;
        expect(VatChecker.checkVatNum('EE101246938')).to.be.true;
        expect(VatChecker.checkVatNum('EE101259750')).to.be.true;
        expect(VatChecker.checkVatNum('EE101261706')).to.be.true;
        expect(VatChecker.checkVatNum('EE101274434')).to.be.true;
        expect(VatChecker.checkVatNum('EE101282772')).to.be.true;
        expect(VatChecker.checkVatNum('EE101321015')).to.be.true;
        expect(VatChecker.checkVatNum('EE101331966')).to.be.true;
        expect(VatChecker.checkVatNum('EE101344209')).to.be.true;
        expect(VatChecker.checkVatNum('EE101367804')).to.be.true;
        expect(VatChecker.checkVatNum('EE101378466')).to.be.true;
        expect(VatChecker.checkVatNum('EE101482239')).to.be.true;
        expect(VatChecker.checkVatNum('EE101560290')).to.be.true;
        expect(VatChecker.checkVatNum('EE101589064')).to.be.true;
        expect(VatChecker.checkVatNum('EE000207418')).to.be.false;
        expect(VatChecker.checkVatNum('EE110207418')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});