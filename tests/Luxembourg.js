var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Luxembourg VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('LU00000000')).to.be.true;
        expect(VatChecker.checkVAT('LU10000356')).to.be.true;
        expect(VatChecker.checkVAT('LU00000202')).to.be.true;
        expect(VatChecker.checkVAT('LU00000303')).to.be.true;
        expect(VatChecker.checkVAT('LU00000404')).to.be.true;
        expect(VatChecker.checkVAT('LU00002020')).to.be.true;
        expect(VatChecker.checkVAT('LU00000606')).to.be.true;
        expect(VatChecker.checkVAT('LU00000707')).to.be.true;
        expect(VatChecker.checkVAT('LU00000808')).to.be.true;
        expect(VatChecker.checkVAT('LU00001010')).to.be.true;
        expect(VatChecker.checkVAT('LU00001111')).to.be.true;
        expect(VatChecker.checkVAT('LU00001212')).to.be.true;
        expect(VatChecker.checkVAT('LU00001414')).to.be.true;
        expect(VatChecker.checkVAT('LU00001515')).to.be.true;
        expect(VatChecker.checkVAT('LU00001616')).to.be.true;
        expect(VatChecker.checkVAT('LU00001818')).to.be.true;
        expect(VatChecker.checkVAT('LU00001919')).to.be.true;
        expect(VatChecker.checkVAT('LU00002020')).to.be.true;
        expect(VatChecker.checkVAT('LU10294056')).to.be.true;
        expect(VatChecker.checkVAT('LU11082217')).to.be.true;
        expect(VatChecker.checkVAT('LU11238870')).to.be.true;
        expect(VatChecker.checkVAT('LU11787741')).to.be.true;
        expect(VatChecker.checkVAT('LU15027442')).to.be.true;
        expect(VatChecker.checkVAT('LU15477706')).to.be.true;
        expect(VatChecker.checkVAT('LU16018776')).to.be.true;
        expect(VatChecker.checkVAT('LU16999000')).to.be.true;
        expect(VatChecker.checkVAT('LU17389679')).to.be.true;
        expect(VatChecker.checkVAT('LU17439746')).to.be.true;
        expect(VatChecker.checkVAT('LU17466042')).to.be.true;
        expect(VatChecker.checkVAT('LU17596310')).to.be.true;
        expect(VatChecker.checkVAT('LU18743400')).to.be.true;
        expect(VatChecker.checkVAT('LU18878516')).to.be.true;
        expect(VatChecker.checkVAT('LU19009176')).to.be.true;
        expect(VatChecker.checkVAT('LU19209331')).to.be.true;
        expect(VatChecker.checkVAT('LU20165772')).to.be.true;
        expect(VatChecker.checkVAT('LU20260743')).to.be.true;
        expect(VatChecker.checkVAT('LU20417913')).to.be.true;
        expect(VatChecker.checkVAT('LU21114032')).to.be.true;
        expect(VatChecker.checkVAT('LU22326250')).to.be.true;
        expect(VatChecker.checkVAT('LU22944200')).to.be.true;
        expect(VatChecker.checkVAT('LU23238809')).to.be.true;
        expect(VatChecker.checkVAT('LU23537155')).to.be.true;
        expect(VatChecker.checkVAT('LU24184936')).to.be.true;
        expect(VatChecker.checkVAT('LU24496840')).to.be.true;
        expect(VatChecker.checkVAT('LU25318872')).to.be.true;
        expect(VatChecker.checkVAT('LU10000350')).to.be.false;
        expect(VatChecker.checkVAT('LU00000200')).to.be.false;
        expect(VatChecker.checkVAT('LU00000300')).to.be.false;
        expect(VatChecker.checkVAT('LU00000400')).to.be.false;
        expect(VatChecker.checkVAT('LU00002021')).to.be.false;
        expect(VatChecker.checkVAT('LU00000600')).to.be.false;
        expect(VatChecker.checkVAT('LU00000700')).to.be.false;
        expect(VatChecker.checkVAT('LU00000800')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('LU 0000 0404')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('LU000-004-04')).to.be.true;
    });
});