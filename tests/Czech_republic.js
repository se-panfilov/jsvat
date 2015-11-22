var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Czech republic VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('CZ00008702')).to.be.true;
        expect(VatChecker.checkVatNum('CZ00216224')).to.be.true;
        expect(VatChecker.checkVatNum('CZ00216305')).to.be.true;
        expect(VatChecker.checkVatNum('CZ00222534')).to.be.true;
        expect(VatChecker.checkVatNum('CZ14503603')).to.be.true;
        expect(VatChecker.checkVatNum('CZ15528561')).to.be.true;
        expect(VatChecker.checkVatNum('CZ22760954')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25093282')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25130382')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25145444')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25216791')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25494538')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25666011')).to.be.true;
        expect(VatChecker.checkVatNum('CZ25745271')).to.be.true;
        expect(VatChecker.checkVatNum('CZ26149206')).to.be.true;
        expect(VatChecker.checkVatNum('CZ26199696')).to.be.true;
        expect(VatChecker.checkVatNum('CZ26539446')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27607461')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27082440')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27261417')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27456927')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27969118')).to.be.true;
        expect(VatChecker.checkVatNum('CZ28020715')).to.be.true;
        expect(VatChecker.checkVatNum('CZ24170593')).to.be.true;
        expect(VatChecker.checkVatNum('CZ27422534')).to.be.true;
        expect(VatChecker.checkVatNum('CZ29000335')).to.be.true;
        expect(VatChecker.checkVatNum('CZ29015243')).to.be.true;
        expect(VatChecker.checkVatNum('CZ44012373')).to.be.true;
        expect(VatChecker.checkVatNum('CZ44797699')).to.be.true;
        expect(VatChecker.checkVatNum('CZ45786259')).to.be.true;
        expect(VatChecker.checkVatNum('CZ46884513')).to.be.true;
        expect(VatChecker.checkVatNum('CZ47676795')).to.be.true;
        expect(VatChecker.checkVatNum('CZ47902442')).to.be.true;
        expect(VatChecker.checkVatNum('CZ49287371')).to.be.true;
        expect(VatChecker.checkVatNum('CZ49678329')).to.be.true;
        expect(VatChecker.checkVatNum('CZ49969820')).to.be.true;
        expect(VatChecker.checkVatNum('CZ60193336')).to.be.true;
        expect(VatChecker.checkVatNum('CZ61459640')).to.be.true;
        expect(VatChecker.checkVatNum('CZ61672530')).to.be.true;
        expect(VatChecker.checkVatNum('CZ62024922')).to.be.true;
        expect(VatChecker.checkVatNum('CZ63079453')).to.be.true;
        expect(VatChecker.checkVatNum('CZ63991705')).to.be.true;
        expect(VatChecker.checkVatNum('CZ64946274')).to.be.true;
        expect(VatChecker.checkVatNum('CZ67985882')).to.be.true;
        expect(VatChecker.checkVatNum('CZ680447748')).to.be.true;
        expect(VatChecker.checkVatNum('CZ699001236')).to.be.true;
        expect(VatChecker.checkVatNum('CZ699001510')).to.be.true;
        expect(VatChecker.checkVatNum('CZ699002447')).to.be.true;
        expect(VatChecker.checkVatNum('CZ70904901')).to.be.true;
        expect(VatChecker.checkVatNum('CZ699001237')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('CZ27 422 534')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('CZ-2742-2534')).to.be.true;
    });
});