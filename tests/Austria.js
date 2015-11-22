var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Austria VAT", function () {

    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('ATU00000024')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000033')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000042')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000202')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000060')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000079')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000088')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000104')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000113')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000122')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000140')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000159')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000168')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000186')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000195')).to.be.true;
        expect(VatChecker.checkVatNum('ATU00000202')).to.be.true;
        expect(VatChecker.checkVatNum('ATU12011204')).to.be.true;
        expect(VatChecker.checkVatNum('ATU10223006')).to.be.true;
        expect(VatChecker.checkVatNum('ATU15110001')).to.be.true;
        expect(VatChecker.checkVatNum('ATU15394605')).to.be.true;
        expect(VatChecker.checkVatNum('ATU15416707')).to.be.true;
        expect(VatChecker.checkVatNum('ATU15662209')).to.be.true;
        expect(VatChecker.checkVatNum('ATU16370905')).to.be.true;
        expect(VatChecker.checkVatNum('ATU23224909')).to.be.true;
        expect(VatChecker.checkVatNum('ATU25775505')).to.be.true;
        expect(VatChecker.checkVatNum('ATU28560205')).to.be.true;
        expect(VatChecker.checkVatNum('ATU28609707')).to.be.true;
        expect(VatChecker.checkVatNum('ATU28617100')).to.be.true;
        expect(VatChecker.checkVatNum('ATU29288909')).to.be.true;
        expect(VatChecker.checkVatNum('ATU37675002')).to.be.true;
        expect(VatChecker.checkVatNum('ATU37785508')).to.be.true;
        expect(VatChecker.checkVatNum('ATU37830200')).to.be.true;
        expect(VatChecker.checkVatNum('ATU38420507')).to.be.true;
        expect(VatChecker.checkVatNum('ATU38516405')).to.be.true;
        expect(VatChecker.checkVatNum('ATU39364503')).to.be.true;
        expect(VatChecker.checkVatNum('ATU42527002')).to.be.true;
        expect(VatChecker.checkVatNum('ATU43666001')).to.be.true;
        expect(VatChecker.checkVatNum('ATU43716207')).to.be.true;
        expect(VatChecker.checkVatNum('ATU45766309')).to.be.true;
        expect(VatChecker.checkVatNum('ATU47977701')).to.be.true;
        expect(VatChecker.checkVatNum('ATU49487700')).to.be.true;
        expect(VatChecker.checkVatNum('ATU51009402')).to.be.true;
        expect(VatChecker.checkVatNum('ATU51507409')).to.be.true;
        expect(VatChecker.checkVatNum('ATU51749808')).to.be.true;
        expect(VatChecker.checkVatNum('ATU52699307')).to.be.true;
        expect(VatChecker.checkVatNum('ATU57477929')).to.be.true;
        expect(VatChecker.checkVatNum('ATU58044146')).to.be.true;
        expect(VatChecker.checkVatNum('ATU61255233')).to.be.true;
        expect(VatChecker.checkVatNum('ATU61993034')).to.be.true;
        expect(VatChecker.checkVatNum('ATU62134737')).to.be.true;
        expect(VatChecker.checkVatNum('ATU62593358')).to.be.true;
        expect(VatChecker.checkVatNum('ATU62765626')).to.be.true;
        expect(VatChecker.checkVatNum('ATU62895905')).to.be.true;
        expect(VatChecker.checkVatNum('ATU62927729')).to.be.true;
        expect(VatChecker.checkVatNum('ATU63436026')).to.be.true;
        expect(VatChecker.checkVatNum('ATU64487479')).to.be.true;
        expect(VatChecker.checkVatNum('ATU64762368')).to.be.true;
        expect(VatChecker.checkVatNum('ATU64727905')).to.be.true;
        expect(VatChecker.checkVatNum('ATU64938189')).to.be.true;
        expect(VatChecker.checkVatNum('ATU66664013')).to.be.true;
        expect(VatChecker.checkVatNum('ATU66889218')).to.be.true;

        expect(VatChecker.checkVatNum('ATV66889218')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223001')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223002')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223003')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223004')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223005')).to.be.false;
        expect(VatChecker.checkVatNum('ATU10223007')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('ATU 0000 0024')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('ATU-000-00024')).to.be.true;
    });
});
