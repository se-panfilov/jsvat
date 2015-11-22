var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Malta VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('MT10126313')).to.be.true;
        expect(VatChecker.checkVatNum('MT10271622')).to.be.true;
        expect(VatChecker.checkVatNum('MT10365719')).to.be.true;
        expect(VatChecker.checkVatNum('MT10414318')).to.be.true;
        expect(VatChecker.checkVatNum('MT10601519')).to.be.true;
        expect(VatChecker.checkVatNum('MT10830531')).to.be.true;
        expect(VatChecker.checkVatNum('MT10988628')).to.be.true;
        expect(VatChecker.checkVatNum('MT11012007')).to.be.true;
        expect(VatChecker.checkVatNum('MT11189317')).to.be.true;
        expect(VatChecker.checkVatNum('MT11407334')).to.be.true;
        expect(VatChecker.checkVatNum('MT11539237')).to.be.true;
        expect(VatChecker.checkVatNum('MT11612810')).to.be.true;
        expect(VatChecker.checkVatNum('MT11622530')).to.be.true;
        expect(VatChecker.checkVatNum('MT12041610')).to.be.true;
        expect(VatChecker.checkVatNum('MT12135215')).to.be.true;
        expect(VatChecker.checkVatNum('MT12667313')).to.be.true;
        expect(VatChecker.checkVatNum('MT12691212')).to.be.true;
        expect(VatChecker.checkVatNum('MT12894031')).to.be.true;
        expect(VatChecker.checkVatNum('MT13271118')).to.be.true;
        expect(VatChecker.checkVatNum('MT14024410')).to.be.true;
        expect(VatChecker.checkVatNum('MT14391532')).to.be.true;
        expect(VatChecker.checkVatNum('MT14632420')).to.be.true;
        expect(VatChecker.checkVatNum('MT14675314')).to.be.true;
        expect(VatChecker.checkVatNum('MT15750503')).to.be.true;
        expect(VatChecker.checkVatNum('MT15861920')).to.be.true;
        expect(VatChecker.checkVatNum('MT15903903')).to.be.true;
        expect(VatChecker.checkVatNum('MT16364430')).to.be.true;
        expect(VatChecker.checkVatNum('MT16509511')).to.be.true;
        expect(VatChecker.checkVatNum('MT16632722')).to.be.true;
        expect(VatChecker.checkVatNum('MT16657432')).to.be.true;
        expect(VatChecker.checkVatNum('MT16735601')).to.be.true;
        expect(VatChecker.checkVatNum('MT16910734')).to.be.true;
        expect(VatChecker.checkVatNum('MT17158231')).to.be.true;
        expect(VatChecker.checkVatNum('MT17727224')).to.be.true;
        expect(VatChecker.checkVatNum('MT17869211')).to.be.true;
        expect(VatChecker.checkVatNum('MT18177531')).to.be.true;
        expect(VatChecker.checkVatNum('MT18821225')).to.be.true;
        expect(VatChecker.checkVatNum('MT19420526')).to.be.true;
        expect(VatChecker.checkVatNum('MT19677315')).to.be.true;
        expect(VatChecker.checkVatNum('MT19738201')).to.be.true;
        expect(VatChecker.checkVatNum('MT20035007')).to.be.true;
        expect(VatChecker.checkVatNum('MT20250021')).to.be.true;
        expect(VatChecker.checkVatNum('MT20390516')).to.be.true;
        expect(VatChecker.checkVatNum('MT20973507')).to.be.true;
        expect(VatChecker.checkVatNum('MT2039051')).to.be.false;
        expect(VatChecker.checkVatNum('MT20390515')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});