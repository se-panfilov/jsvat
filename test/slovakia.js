var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Slovakia republic VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('SK1025529197')).to.be.true;
        expect(VatChecker.checkVAT('SK2020032377')).to.be.true;
        expect(VatChecker.checkVAT('SK2020073528')).to.be.true;
        expect(VatChecker.checkVAT('SK2020077345')).to.be.true;
        expect(VatChecker.checkVAT('SK2020255787')).to.be.true;
        expect(VatChecker.checkVAT('SK2020261353')).to.be.true;
        expect(VatChecker.checkVAT('SK2020264939')).to.be.true;
        expect(VatChecker.checkVAT('SK2020273893')).to.be.true;
        expect(VatChecker.checkVAT('SK2020278766')).to.be.true;
        expect(VatChecker.checkVAT('SK2020317244')).to.be.true;
        expect(VatChecker.checkVAT('SK2020325109')).to.be.true;
        expect(VatChecker.checkVAT('SK2020325516')).to.be.true;
        expect(VatChecker.checkVAT('SK2020329278')).to.be.true;
        expect(VatChecker.checkVAT('SK2020350332')).to.be.true;
        expect(VatChecker.checkVAT('SK2020351993')).to.be.true;
        expect(VatChecker.checkVAT('SK2020358263')).to.be.true;
        expect(VatChecker.checkVAT('SK2020431710')).to.be.true;
        expect(VatChecker.checkVAT('SK2020527300')).to.be.true;
        expect(VatChecker.checkVAT('SK2020798637')).to.be.true;
        expect(VatChecker.checkVAT('SK2020845255')).to.be.true;
        expect(VatChecker.checkVAT('SK2020845332')).to.be.true;
        expect(VatChecker.checkVAT('SK2021116889')).to.be.true;
        expect(VatChecker.checkVAT('SK2021252827')).to.be.true;
        expect(VatChecker.checkVAT('SK2021776207')).to.be.true;
        expect(VatChecker.checkVAT('SK2021783357')).to.be.true;
        expect(VatChecker.checkVAT('SK2021853504')).to.be.true;
        expect(VatChecker.checkVAT('SK2021885888')).to.be.true;
        expect(VatChecker.checkVAT('SK2021900804')).to.be.true;
        expect(VatChecker.checkVAT('SK2021905776')).to.be.true;
        expect(VatChecker.checkVAT('SK2021947180')).to.be.true;
        expect(VatChecker.checkVAT('SK2022199432')).to.be.true;
        expect(VatChecker.checkVAT('SK2022229374')).to.be.true;
        expect(VatChecker.checkVAT('SK2022441168')).to.be.true;
        expect(VatChecker.checkVAT('SK2022569791')).to.be.true;
        expect(VatChecker.checkVAT('SK2022579152')).to.be.true;
        expect(VatChecker.checkVAT('SK2022832394')).to.be.true;
        expect(VatChecker.checkVAT('SK2023150701')).to.be.true;
        expect(VatChecker.checkVAT('SK2023369381')).to.be.true;
        expect(VatChecker.checkVAT('SK2023386805')).to.be.true;
        expect(VatChecker.checkVAT('SK2022742458')).to.be.true;
        expect(VatChecker.checkVAT('SK7020000119')).to.be.true;
        expect(VatChecker.checkVAT('SK7020000207')).to.be.true;
        expect(VatChecker.checkVAT('SK7020000317')).to.be.true;
        expect(VatChecker.checkVAT('SK7020000427')).to.be.true;
        expect(VatChecker.checkVAT('SK7020000680')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('SK5407062531')).to.be.false;
        expect(VatChecker.checkVAT('SK7020001680')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('SK20 203 50332')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('SK202-035-0332')).to.be.true;
    });
});