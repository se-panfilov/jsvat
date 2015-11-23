var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Croatia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('HR02574432339')).to.be.true;
        expect(VatChecker.checkVAT('HR06282943396')).to.be.true;
        expect(VatChecker.checkVAT('HR06631807697')).to.be.true;
        expect(VatChecker.checkVAT('HR08308894711')).to.be.true;
        expect(VatChecker.checkVAT('HR09993794428')).to.be.true;
        expect(VatChecker.checkVAT('HR12385860076')).to.be.true;
        expect(VatChecker.checkVAT('HR14553560010')).to.be.true;
        expect(VatChecker.checkVAT('HR16364086764')).to.be.true;
        expect(VatChecker.checkVAT('HR16491034355')).to.be.true;
        expect(VatChecker.checkVAT('HR17099025134')).to.be.true;
        expect(VatChecker.checkVAT('HR20649144807')).to.be.true;
        expect(VatChecker.checkVAT('HR20963249418')).to.be.true;
        expect(VatChecker.checkVAT('HR21213412417')).to.be.true;
        expect(VatChecker.checkVAT('HR22910368449')).to.be.true;
        expect(VatChecker.checkVAT('HR23448731483')).to.be.true;
        expect(VatChecker.checkVAT('HR24595836665')).to.be.true;
        expect(VatChecker.checkVAT('HR24897777109')).to.be.true;
        expect(VatChecker.checkVAT('HR25107893471')).to.be.true;
        expect(VatChecker.checkVAT('HR28639480902')).to.be.true;
        expect(VatChecker.checkVAT('HR28922587775')).to.be.true;
        expect(VatChecker.checkVAT('HR33392005961')).to.be.true;
        expect(VatChecker.checkVAT('HR39672837472')).to.be.true;
        expect(VatChecker.checkVAT('HR45726041402')).to.be.true;
        expect(VatChecker.checkVAT('HR46144176176')).to.be.true;
        expect(VatChecker.checkVAT('HR51200725053')).to.be.true;
        expect(VatChecker.checkVAT('HR61867710134')).to.be.true;
        expect(VatChecker.checkVAT('HR64871724841')).to.be.true;
        expect(VatChecker.checkVAT('HR69715301002')).to.be.true;
        expect(VatChecker.checkVAT('HR71434725544')).to.be.true;
        expect(VatChecker.checkVAT('HR81592331325')).to.be.true;
        expect(VatChecker.checkVAT('HR81889785066')).to.be.true;
        expect(VatChecker.checkVAT('HR82067332481')).to.be.true;
        expect(VatChecker.checkVAT('HR82659251081')).to.be.true;
        expect(VatChecker.checkVAT('HR85760419184')).to.be.true;
        expect(VatChecker.checkVAT('HR88776522763')).to.be.true;
        expect(VatChecker.checkVAT('HR89018712265')).to.be.true;
        expect(VatChecker.checkVAT('HR89789819324')).to.be.true;
        expect(VatChecker.checkVAT('HR91025164621')).to.be.true;
        expect(VatChecker.checkVAT('HR92889721810')).to.be.true;
        expect(VatChecker.checkVAT('HR93634429487')).to.be.true;
        expect(VatChecker.checkVAT('HR95976200516')).to.be.true;
        expect(VatChecker.checkVAT('HR96151551854')).to.be.true;
        expect(VatChecker.checkVAT('HR97405527203')).to.be.true;
        expect(VatChecker.checkVAT('HR9363442948')).to.be.false;
        expect(VatChecker.checkVAT('HR93634429488')).to.be.false;
        expect(VatChecker.checkVAT('HR936344294871')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('HR 8188978 5066')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('HR8-18-89785066')).to.be.true;
    });
});