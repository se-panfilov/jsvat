var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Croatia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('HR02574432339')).to.be.true;
        expect(VatChecker.checkVatNum('HR06282943396')).to.be.true;
        expect(VatChecker.checkVatNum('HR06631807697')).to.be.true;
        expect(VatChecker.checkVatNum('HR08308894711')).to.be.true;
        expect(VatChecker.checkVatNum('HR09993794428')).to.be.true;
        expect(VatChecker.checkVatNum('HR12385860076')).to.be.true;
        expect(VatChecker.checkVatNum('HR14553560010')).to.be.true;
        expect(VatChecker.checkVatNum('HR16364086764')).to.be.true;
        expect(VatChecker.checkVatNum('HR16491034355')).to.be.true;
        expect(VatChecker.checkVatNum('HR17099025134')).to.be.true;
        expect(VatChecker.checkVatNum('HR20649144807')).to.be.true;
        expect(VatChecker.checkVatNum('HR20963249418')).to.be.true;
        expect(VatChecker.checkVatNum('HR21213412417')).to.be.true;
        expect(VatChecker.checkVatNum('HR22910368449')).to.be.true;
        expect(VatChecker.checkVatNum('HR23448731483')).to.be.true;
        expect(VatChecker.checkVatNum('HR24595836665')).to.be.true;
        expect(VatChecker.checkVatNum('HR24897777109')).to.be.true;
        expect(VatChecker.checkVatNum('HR25107893471')).to.be.true;
        expect(VatChecker.checkVatNum('HR28639480902')).to.be.true;
        expect(VatChecker.checkVatNum('HR28922587775')).to.be.true;
        expect(VatChecker.checkVatNum('HR33392005961')).to.be.true;
        expect(VatChecker.checkVatNum('HR39672837472')).to.be.true;
        expect(VatChecker.checkVatNum('HR45726041402')).to.be.true;
        expect(VatChecker.checkVatNum('HR46144176176')).to.be.true;
        expect(VatChecker.checkVatNum('HR51200725053')).to.be.true;
        expect(VatChecker.checkVatNum('HR61867710134')).to.be.true;
        expect(VatChecker.checkVatNum('HR64871724841')).to.be.true;
        expect(VatChecker.checkVatNum('HR69715301002')).to.be.true;
        expect(VatChecker.checkVatNum('HR71434725544')).to.be.true;
        expect(VatChecker.checkVatNum('HR81592331325')).to.be.true;
        expect(VatChecker.checkVatNum('HR81889785066')).to.be.true;
        expect(VatChecker.checkVatNum('HR82067332481')).to.be.true;
        expect(VatChecker.checkVatNum('HR82659251081')).to.be.true;
        expect(VatChecker.checkVatNum('HR85760419184')).to.be.true;
        expect(VatChecker.checkVatNum('HR88776522763')).to.be.true;
        expect(VatChecker.checkVatNum('HR89018712265')).to.be.true;
        expect(VatChecker.checkVatNum('HR89789819324')).to.be.true;
        expect(VatChecker.checkVatNum('HR91025164621')).to.be.true;
        expect(VatChecker.checkVatNum('HR92889721810')).to.be.true;
        expect(VatChecker.checkVatNum('HR93634429487')).to.be.true;
        expect(VatChecker.checkVatNum('HR95976200516')).to.be.true;
        expect(VatChecker.checkVatNum('HR96151551854')).to.be.true;
        expect(VatChecker.checkVatNum('HR97405527203')).to.be.true;
        expect(VatChecker.checkVatNum('HR9363442948')).to.be.false;
        expect(VatChecker.checkVatNum('HR93634429488')).to.be.false;
        expect(VatChecker.checkVatNum('HR936344294871')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('HR 8188978 5066')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('HR8-18-89785066')).to.be.true;
    });
});