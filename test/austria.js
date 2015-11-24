var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Austria VAT", function () {

    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('ATU00000024')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000033')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000042')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000202')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000060')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000079')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000088')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000104')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000113')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000122')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000140')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000159')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000168')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000186')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000195')).to.be.true;
        expect(VatChecker.checkVAT('ATU00000202')).to.be.true;
        expect(VatChecker.checkVAT('ATU12011204')).to.be.true;
        expect(VatChecker.checkVAT('ATU10223006')).to.be.true;
        expect(VatChecker.checkVAT('ATU15110001')).to.be.true;
        expect(VatChecker.checkVAT('ATU15394605')).to.be.true;
        expect(VatChecker.checkVAT('ATU15416707')).to.be.true;
        expect(VatChecker.checkVAT('ATU15662209')).to.be.true;
        expect(VatChecker.checkVAT('ATU16370905')).to.be.true;
        expect(VatChecker.checkVAT('ATU23224909')).to.be.true;
        expect(VatChecker.checkVAT('ATU25775505')).to.be.true;
        expect(VatChecker.checkVAT('ATU28560205')).to.be.true;
        expect(VatChecker.checkVAT('ATU28609707')).to.be.true;
        expect(VatChecker.checkVAT('ATU28617100')).to.be.true;
        expect(VatChecker.checkVAT('ATU29288909')).to.be.true;
        expect(VatChecker.checkVAT('ATU37675002')).to.be.true;
        expect(VatChecker.checkVAT('ATU37785508')).to.be.true;
        expect(VatChecker.checkVAT('ATU37830200')).to.be.true;
        expect(VatChecker.checkVAT('ATU38420507')).to.be.true;
        expect(VatChecker.checkVAT('ATU38516405')).to.be.true;
        expect(VatChecker.checkVAT('ATU39364503')).to.be.true;
        expect(VatChecker.checkVAT('ATU42527002')).to.be.true;
        expect(VatChecker.checkVAT('ATU43666001')).to.be.true;
        expect(VatChecker.checkVAT('ATU43716207')).to.be.true;
        expect(VatChecker.checkVAT('ATU45766309')).to.be.true;
        expect(VatChecker.checkVAT('ATU47977701')).to.be.true;
        expect(VatChecker.checkVAT('ATU49487700')).to.be.true;
        expect(VatChecker.checkVAT('ATU51009402')).to.be.true;
        expect(VatChecker.checkVAT('ATU51507409')).to.be.true;
        expect(VatChecker.checkVAT('ATU51749808')).to.be.true;
        expect(VatChecker.checkVAT('ATU52699307')).to.be.true;
        expect(VatChecker.checkVAT('ATU57477929')).to.be.true;
        expect(VatChecker.checkVAT('ATU58044146')).to.be.true;
        expect(VatChecker.checkVAT('ATU61255233')).to.be.true;
        expect(VatChecker.checkVAT('ATU61993034')).to.be.true;
        expect(VatChecker.checkVAT('ATU62134737')).to.be.true;
        expect(VatChecker.checkVAT('ATU62593358')).to.be.true;
        expect(VatChecker.checkVAT('ATU62765626')).to.be.true;
        expect(VatChecker.checkVAT('ATU62895905')).to.be.true;
        expect(VatChecker.checkVAT('ATU62927729')).to.be.true;
        expect(VatChecker.checkVAT('ATU63436026')).to.be.true;
        expect(VatChecker.checkVAT('ATU64487479')).to.be.true;
        expect(VatChecker.checkVAT('ATU64762368')).to.be.true;
        expect(VatChecker.checkVAT('ATU64727905')).to.be.true;
        expect(VatChecker.checkVAT('ATU64938189')).to.be.true;
        expect(VatChecker.checkVAT('ATU66664013')).to.be.true;
        expect(VatChecker.checkVAT('ATU66889218')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('ATV66889218')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223001')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223002')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223003')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223004')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223005')).to.be.false;
        expect(VatChecker.checkVAT('ATU10223007')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('ATU 0000 0024')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('ATU-000-00024')).to.be.true;
    });
});
