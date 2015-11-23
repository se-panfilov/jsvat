var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Latvia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('LV07091910933')).to.be.true;
        expect(VatChecker.checkVAT('LV40003009497')).to.be.true;
        expect(VatChecker.checkVAT('LV40003032949')).to.be.true;
        expect(VatChecker.checkVAT('LV40003048583')).to.be.true;
        expect(VatChecker.checkVAT('LV40003125825')).to.be.true;
        expect(VatChecker.checkVAT('LV40003130421')).to.be.true;
        expect(VatChecker.checkVAT('LV40003139967')).to.be.true;
        expect(VatChecker.checkVAT('LV40003224680')).to.be.true;
        expect(VatChecker.checkVAT('LV40003254505')).to.be.true;
        expect(VatChecker.checkVAT('LV40003275598')).to.be.true;
        expect(VatChecker.checkVAT('LV40003280118')).to.be.true;
        expect(VatChecker.checkVAT('LV40003282138')).to.be.true;
        expect(VatChecker.checkVAT('LV40003287135')).to.be.true;
        expect(VatChecker.checkVAT('LV40003348054')).to.be.true;
        expect(VatChecker.checkVAT('LV40003435328')).to.be.true;
        expect(VatChecker.checkVAT('LV40003439368')).to.be.true;
        expect(VatChecker.checkVAT('LV40003453643')).to.be.true;
        expect(VatChecker.checkVAT('LV40003511655')).to.be.true;
        expect(VatChecker.checkVAT('LV40003553786')).to.be.true;
        expect(VatChecker.checkVAT('LV40003568404')).to.be.true;
        expect(VatChecker.checkVAT('LV40003576416')).to.be.true;
        expect(VatChecker.checkVAT('LV40003585673')).to.be.true;
        expect(VatChecker.checkVAT('LV40003609083')).to.be.true;
        expect(VatChecker.checkVAT('LV40003651875')).to.be.true;
        expect(VatChecker.checkVAT('LV40003702071')).to.be.true;
        expect(VatChecker.checkVAT('LV40003732964')).to.be.true;
        expect(VatChecker.checkVAT('LV40003734170')).to.be.true;
        expect(VatChecker.checkVAT('LV40003857687')).to.be.true;
        expect(VatChecker.checkVAT('LV40003921905')).to.be.true;
        expect(VatChecker.checkVAT('LV40008000225')).to.be.true;
        expect(VatChecker.checkVAT('LV40008197548')).to.be.true;
        expect(VatChecker.checkVAT('LV40103058465')).to.be.true;
        expect(VatChecker.checkVAT('LV40103189574')).to.be.true;
        expect(VatChecker.checkVAT('LV40103247567')).to.be.true;
        expect(VatChecker.checkVAT('LV40103388513')).to.be.true;
        expect(VatChecker.checkVAT('LV40103446084')).to.be.true;
        expect(VatChecker.checkVAT('LV40103592648')).to.be.true;
        expect(VatChecker.checkVAT('LV40103619251')).to.be.true;
        expect(VatChecker.checkVAT('LV41202010448')).to.be.true;
        expect(VatChecker.checkVAT('LV41031037436')).to.be.true;
        expect(VatChecker.checkVAT('LV41503031291')).to.be.true;
        expect(VatChecker.checkVAT('LV50003017621')).to.be.true;
        expect(VatChecker.checkVAT('LV50003913651')).to.be.true;
        expect(VatChecker.checkVAT('LV50008111541')).to.be.true;
        expect(VatChecker.checkVAT('LV90000022399')).to.be.true;
        expect(VatChecker.checkVAT('LV90000136794')).to.be.true;
        expect(VatChecker.checkVAT('LV90002573483')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('LV4 0003 254505')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('LV400-032-54505')).to.be.true;
    });
});