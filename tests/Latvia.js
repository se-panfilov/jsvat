var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Latvia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('LV07091910933')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003009497')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003032949')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003048583')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003125825')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003130421')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003139967')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003224680')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003254505')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003275598')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003280118')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003282138')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003287135')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003348054')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003435328')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003439368')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003453643')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003511655')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003553786')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003568404')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003576416')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003585673')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003609083')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003651875')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003702071')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003732964')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003734170')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003857687')).to.be.true;
        expect(VatChecker.checkVatNum('LV40003921905')).to.be.true;
        expect(VatChecker.checkVatNum('LV40008000225')).to.be.true;
        expect(VatChecker.checkVatNum('LV40008197548')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103058465')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103189574')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103247567')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103388513')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103446084')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103592648')).to.be.true;
        expect(VatChecker.checkVatNum('LV40103619251')).to.be.true;
        expect(VatChecker.checkVatNum('LV41202010448')).to.be.true;
        expect(VatChecker.checkVatNum('LV41031037436')).to.be.true;
        expect(VatChecker.checkVatNum('LV41503031291')).to.be.true;
        expect(VatChecker.checkVatNum('LV50003017621')).to.be.true;
        expect(VatChecker.checkVatNum('LV50003913651')).to.be.true;
        expect(VatChecker.checkVatNum('LV50008111541')).to.be.true;
        expect(VatChecker.checkVatNum('LV90000022399')).to.be.true;
        expect(VatChecker.checkVatNum('LV90000136794')).to.be.true;
        expect(VatChecker.checkVatNum('LV90002573483')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('LV4 0003 254505')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('LV400-032-54505')).to.be.true;
    });
});