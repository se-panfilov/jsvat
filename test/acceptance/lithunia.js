var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Lithunia VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('LT100000009017')).to.be.true;
        expect(jsvat.checkVAT('LT100000031710')).to.be.true;
        expect(jsvat.checkVAT('LT100001410314')).to.be.true;
        expect(jsvat.checkVAT('LT100001647810')).to.be.true;
        expect(jsvat.checkVAT('LT100002247911')).to.be.true;
        expect(jsvat.checkVAT('LT100002640213')).to.be.true;
        expect(jsvat.checkVAT('LT100002992518')).to.be.true;
        expect(jsvat.checkVAT('LT100003099412')).to.be.true;
        expect(jsvat.checkVAT('LT100003222911')).to.be.true;
        expect(jsvat.checkVAT('LT100003776115')).to.be.true;
        expect(jsvat.checkVAT('LT100003806615')).to.be.true;
        expect(jsvat.checkVAT('LT100004463513')).to.be.true;
        expect(jsvat.checkVAT('LT100005808219')).to.be.true;
        expect(jsvat.checkVAT('LT100005772517')).to.be.true;
        expect(jsvat.checkVAT('LT100005847815')).to.be.true;
        expect(jsvat.checkVAT('LT100006555419')).to.be.true;
        expect(jsvat.checkVAT('LT100006615910')).to.be.true;
        expect(jsvat.checkVAT('LT100006688411')).to.be.true;
        expect(jsvat.checkVAT('LT100006852615')).to.be.true;
        expect(jsvat.checkVAT('LT100007390914')).to.be.true;
        expect(jsvat.checkVAT('LT100008061513')).to.be.true;
        expect(jsvat.checkVAT('LT100119219')).to.be.true;
        expect(jsvat.checkVAT('LT104019515')).to.be.true;
        expect(jsvat.checkVAT('LT108940716')).to.be.true;
        expect(jsvat.checkVAT('LT115521113')).to.be.true;
        expect(jsvat.checkVAT('LT105672113')).to.be.true;
        expect(jsvat.checkVAT('LT115184219')).to.be.true;
        expect(jsvat.checkVAT('LT119515314')).to.be.true;
        expect(jsvat.checkVAT('LT119513417')).to.be.true;
        expect(jsvat.checkVAT('LT119505811')).to.be.true;
        expect(jsvat.checkVAT('LT119502413')).to.be.true;
        expect(jsvat.checkVAT('LT119508113')).to.be.true;
        expect(jsvat.checkVAT('LT119517219')).to.be.true;
        expect(jsvat.checkVAT('LT120212314')).to.be.true;
        expect(jsvat.checkVAT('LT120296515')).to.be.true;
        expect(jsvat.checkVAT('LT205052113')).to.be.true;
        expect(jsvat.checkVAT('LT205458414')).to.be.true;
        expect(jsvat.checkVAT('LT208640716')).to.be.true;
        expect(jsvat.checkVAT('LT210811811')).to.be.true;
        expect(jsvat.checkVAT('LT213179412')).to.be.true;
        expect(jsvat.checkVAT('LT238708219')).to.be.true;
        expect(jsvat.checkVAT('LT239056314')).to.be.true;
        expect(jsvat.checkVAT('LT243857314')).to.be.true;
        expect(jsvat.checkVAT('LT245702113')).to.be.true;
        expect(jsvat.checkVAT('LT246655314')).to.be.true;
        expect(jsvat.checkVAT('LT254096515')).to.be.true;
        expect(jsvat.checkVAT('LT258223515')).to.be.true;
        expect(jsvat.checkVAT('LT290061371314')).to.be.true;
        expect(jsvat.checkVAT('LT321389515')).to.be.true;
        expect(jsvat.checkVAT('LT330214917')).to.be.true;
        expect(jsvat.checkVAT('LT331842113')).to.be.true;
        expect(jsvat.checkVAT('LT351634917')).to.be.true;
        expect(jsvat.checkVAT('LT408382716')).to.be.true;
        expect(jsvat.checkVAT('LT458248716')).to.be.true;
        expect(jsvat.checkVAT('LT530091413')).to.be.true;
        expect(jsvat.checkVAT('LT852320917')).to.be.true;
        expect(jsvat.checkVAT('LT907560811')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('LT 2582 23515')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('LT2-5822-3515')).to.be.true;
    });
});