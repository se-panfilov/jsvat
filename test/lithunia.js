var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Lithunia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('LT100000009017')).to.be.true;
        expect(VatChecker.checkVAT('LT100000031710')).to.be.true;
        expect(VatChecker.checkVAT('LT100001410314')).to.be.true;
        expect(VatChecker.checkVAT('LT100001647810')).to.be.true;
        expect(VatChecker.checkVAT('LT100002247911')).to.be.true;
        expect(VatChecker.checkVAT('LT100002640213')).to.be.true;
        expect(VatChecker.checkVAT('LT100002992518')).to.be.true;
        expect(VatChecker.checkVAT('LT100003099412')).to.be.true;
        expect(VatChecker.checkVAT('LT100003222911')).to.be.true;
        expect(VatChecker.checkVAT('LT100003776115')).to.be.true;
        expect(VatChecker.checkVAT('LT100003806615')).to.be.true;
        expect(VatChecker.checkVAT('LT100004463513')).to.be.true;
        expect(VatChecker.checkVAT('LT100005808219')).to.be.true;
        expect(VatChecker.checkVAT('LT100005772517')).to.be.true;
        expect(VatChecker.checkVAT('LT100005847815')).to.be.true;
        expect(VatChecker.checkVAT('LT100006555419')).to.be.true;
        expect(VatChecker.checkVAT('LT100006615910')).to.be.true;
        expect(VatChecker.checkVAT('LT100006688411')).to.be.true;
        expect(VatChecker.checkVAT('LT100006852615')).to.be.true;
        expect(VatChecker.checkVAT('LT100007390914')).to.be.true;
        expect(VatChecker.checkVAT('LT100008061513')).to.be.true;
        expect(VatChecker.checkVAT('LT100119219')).to.be.true;
        expect(VatChecker.checkVAT('LT104019515')).to.be.true;
        expect(VatChecker.checkVAT('LT108940716')).to.be.true;
        expect(VatChecker.checkVAT('LT115521113')).to.be.true;
        expect(VatChecker.checkVAT('LT105672113')).to.be.true;
        expect(VatChecker.checkVAT('LT115184219')).to.be.true;
        expect(VatChecker.checkVAT('LT119515314')).to.be.true;
        expect(VatChecker.checkVAT('LT119513417')).to.be.true;
        expect(VatChecker.checkVAT('LT119505811')).to.be.true;
        expect(VatChecker.checkVAT('LT119502413')).to.be.true;
        expect(VatChecker.checkVAT('LT119508113')).to.be.true;
        expect(VatChecker.checkVAT('LT119517219')).to.be.true;
        expect(VatChecker.checkVAT('LT120212314')).to.be.true;
        expect(VatChecker.checkVAT('LT120296515')).to.be.true;
        expect(VatChecker.checkVAT('LT205052113')).to.be.true;
        expect(VatChecker.checkVAT('LT205458414')).to.be.true;
        expect(VatChecker.checkVAT('LT208640716')).to.be.true;
        expect(VatChecker.checkVAT('LT210811811')).to.be.true;
        expect(VatChecker.checkVAT('LT213179412')).to.be.true;
        expect(VatChecker.checkVAT('LT238708219')).to.be.true;
        expect(VatChecker.checkVAT('LT239056314')).to.be.true;
        expect(VatChecker.checkVAT('LT243857314')).to.be.true;
        expect(VatChecker.checkVAT('LT245702113')).to.be.true;
        expect(VatChecker.checkVAT('LT246655314')).to.be.true;
        expect(VatChecker.checkVAT('LT254096515')).to.be.true;
        expect(VatChecker.checkVAT('LT258223515')).to.be.true;
        expect(VatChecker.checkVAT('LT290061371314')).to.be.true;
        expect(VatChecker.checkVAT('LT321389515')).to.be.true;
        expect(VatChecker.checkVAT('LT330214917')).to.be.true;
        expect(VatChecker.checkVAT('LT331842113')).to.be.true;
        expect(VatChecker.checkVAT('LT351634917')).to.be.true;
        expect(VatChecker.checkVAT('LT408382716')).to.be.true;
        expect(VatChecker.checkVAT('LT458248716')).to.be.true;
        expect(VatChecker.checkVAT('LT530091413')).to.be.true;
        expect(VatChecker.checkVAT('LT852320917')).to.be.true;
        expect(VatChecker.checkVAT('LT907560811')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('LT 2582 23515')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('LT2-5822-3515')).to.be.true;
    });
});