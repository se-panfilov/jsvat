var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Lithunia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('LT100000009017')).to.be.true;
        expect(VatChecker.checkVatNum('LT100000031710')).to.be.true;
        expect(VatChecker.checkVatNum('LT100001410314')).to.be.true;
        expect(VatChecker.checkVatNum('LT100001647810')).to.be.true;
        expect(VatChecker.checkVatNum('LT100002247911')).to.be.true;
        expect(VatChecker.checkVatNum('LT100002640213')).to.be.true;
        expect(VatChecker.checkVatNum('LT100002992518')).to.be.true;
        expect(VatChecker.checkVatNum('LT100003099412')).to.be.true;
        expect(VatChecker.checkVatNum('LT100003222911')).to.be.true;
        expect(VatChecker.checkVatNum('LT100003776115')).to.be.true;
        expect(VatChecker.checkVatNum('LT100003806615')).to.be.true;
        expect(VatChecker.checkVatNum('LT100004463513')).to.be.true;
        expect(VatChecker.checkVatNum('LT100005808219')).to.be.true;
        expect(VatChecker.checkVatNum('LT100005772517')).to.be.true;
        expect(VatChecker.checkVatNum('LT100005847815')).to.be.true;
        expect(VatChecker.checkVatNum('LT100006555419')).to.be.true;
        expect(VatChecker.checkVatNum('LT100006615910')).to.be.true;
        expect(VatChecker.checkVatNum('LT100006688411')).to.be.true;
        expect(VatChecker.checkVatNum('LT100006852615')).to.be.true;
        expect(VatChecker.checkVatNum('LT100007390914')).to.be.true;
        expect(VatChecker.checkVatNum('LT100008061513')).to.be.true;
        expect(VatChecker.checkVatNum('LT100119219')).to.be.true;
        expect(VatChecker.checkVatNum('LT104019515')).to.be.true;
        expect(VatChecker.checkVatNum('LT108940716')).to.be.true;
        expect(VatChecker.checkVatNum('LT115521113')).to.be.true;
        expect(VatChecker.checkVatNum('LT105672113')).to.be.true;
        expect(VatChecker.checkVatNum('LT115184219')).to.be.true;
        expect(VatChecker.checkVatNum('LT119515314')).to.be.true;
        expect(VatChecker.checkVatNum('LT119513417')).to.be.true;
        expect(VatChecker.checkVatNum('LT119505811')).to.be.true;
        expect(VatChecker.checkVatNum('LT119502413')).to.be.true;
        expect(VatChecker.checkVatNum('LT119508113')).to.be.true;
        expect(VatChecker.checkVatNum('LT119517219')).to.be.true;
        expect(VatChecker.checkVatNum('LT120212314')).to.be.true;
        expect(VatChecker.checkVatNum('LT120296515')).to.be.true;
        expect(VatChecker.checkVatNum('LT205052113')).to.be.true;
        expect(VatChecker.checkVatNum('LT205458414')).to.be.true;
        expect(VatChecker.checkVatNum('LT208640716')).to.be.true;
        expect(VatChecker.checkVatNum('LT210811811')).to.be.true;
        expect(VatChecker.checkVatNum('LT213179412')).to.be.true;
        expect(VatChecker.checkVatNum('LT238708219')).to.be.true;
        expect(VatChecker.checkVatNum('LT239056314')).to.be.true;
        expect(VatChecker.checkVatNum('LT243857314')).to.be.true;
        expect(VatChecker.checkVatNum('LT245702113')).to.be.true;
        expect(VatChecker.checkVatNum('LT246655314')).to.be.true;
        expect(VatChecker.checkVatNum('LT254096515')).to.be.true;
        expect(VatChecker.checkVatNum('LT258223515')).to.be.true;
        expect(VatChecker.checkVatNum('LT290061371314')).to.be.true;
        expect(VatChecker.checkVatNum('LT321389515')).to.be.true;
        expect(VatChecker.checkVatNum('LT330214917')).to.be.true;
        expect(VatChecker.checkVatNum('LT331842113')).to.be.true;
        expect(VatChecker.checkVatNum('LT351634917')).to.be.true;
        expect(VatChecker.checkVatNum('LT408382716')).to.be.true;
        expect(VatChecker.checkVatNum('LT458248716')).to.be.true;
        expect(VatChecker.checkVatNum('LT530091413')).to.be.true;
        expect(VatChecker.checkVatNum('LT852320917')).to.be.true;
        expect(VatChecker.checkVatNum('LT907560811')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('LT 2582 23515')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('LT2-5822-3515')).to.be.true;
    });
});