var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Malta VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('MT10126313')).to.be.true;
        expect(VatChecker.checkVAT('MT10271622')).to.be.true;
        expect(VatChecker.checkVAT('MT10365719')).to.be.true;
        expect(VatChecker.checkVAT('MT10414318')).to.be.true;
        expect(VatChecker.checkVAT('MT10601519')).to.be.true;
        expect(VatChecker.checkVAT('MT10830531')).to.be.true;
        expect(VatChecker.checkVAT('MT10988628')).to.be.true;
        expect(VatChecker.checkVAT('MT11012007')).to.be.true;
        expect(VatChecker.checkVAT('MT11189317')).to.be.true;
        expect(VatChecker.checkVAT('MT11407334')).to.be.true;
        expect(VatChecker.checkVAT('MT11539237')).to.be.true;
        expect(VatChecker.checkVAT('MT11612810')).to.be.true;
        expect(VatChecker.checkVAT('MT11622530')).to.be.true;
        expect(VatChecker.checkVAT('MT12041610')).to.be.true;
        expect(VatChecker.checkVAT('MT12135215')).to.be.true;
        expect(VatChecker.checkVAT('MT12667313')).to.be.true;
        expect(VatChecker.checkVAT('MT12691212')).to.be.true;
        expect(VatChecker.checkVAT('MT12894031')).to.be.true;
        expect(VatChecker.checkVAT('MT13271118')).to.be.true;
        expect(VatChecker.checkVAT('MT14024410')).to.be.true;
        expect(VatChecker.checkVAT('MT14391532')).to.be.true;
        expect(VatChecker.checkVAT('MT14632420')).to.be.true;
        expect(VatChecker.checkVAT('MT14675314')).to.be.true;
        expect(VatChecker.checkVAT('MT15750503')).to.be.true;
        expect(VatChecker.checkVAT('MT15861920')).to.be.true;
        expect(VatChecker.checkVAT('MT15903903')).to.be.true;
        expect(VatChecker.checkVAT('MT16364430')).to.be.true;
        expect(VatChecker.checkVAT('MT16509511')).to.be.true;
        expect(VatChecker.checkVAT('MT16632722')).to.be.true;
        expect(VatChecker.checkVAT('MT16657432')).to.be.true;
        expect(VatChecker.checkVAT('MT16735601')).to.be.true;
        expect(VatChecker.checkVAT('MT16910734')).to.be.true;
        expect(VatChecker.checkVAT('MT17158231')).to.be.true;
        expect(VatChecker.checkVAT('MT17727224')).to.be.true;
        expect(VatChecker.checkVAT('MT17869211')).to.be.true;
        expect(VatChecker.checkVAT('MT18177531')).to.be.true;
        expect(VatChecker.checkVAT('MT18821225')).to.be.true;
        expect(VatChecker.checkVAT('MT19420526')).to.be.true;
        expect(VatChecker.checkVAT('MT19677315')).to.be.true;
        expect(VatChecker.checkVAT('MT19738201')).to.be.true;
        expect(VatChecker.checkVAT('MT20035007')).to.be.true;
        expect(VatChecker.checkVAT('MT20250021')).to.be.true;
        expect(VatChecker.checkVAT('MT20390516')).to.be.true;
        expect(VatChecker.checkVAT('MT20973507')).to.be.true;
        expect(VatChecker.checkVAT('MT2039051')).to.be.false;
        expect(VatChecker.checkVAT('MT20390515')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('MT1 161 2810')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('MT11-61-2810')).to.be.true;
    });
});