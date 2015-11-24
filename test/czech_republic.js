var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Czech republic VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('CZ00008702')).to.be.true;
        expect(jsvat.checkVAT('CZ00216224')).to.be.true;
        expect(jsvat.checkVAT('CZ00216305')).to.be.true;
        expect(jsvat.checkVAT('CZ00222534')).to.be.true;
        expect(jsvat.checkVAT('CZ14503603')).to.be.true;
        expect(jsvat.checkVAT('CZ15528561')).to.be.true;
        expect(jsvat.checkVAT('CZ22760954')).to.be.true;
        expect(jsvat.checkVAT('CZ25093282')).to.be.true;
        expect(jsvat.checkVAT('CZ25130382')).to.be.true;
        expect(jsvat.checkVAT('CZ25145444')).to.be.true;
        expect(jsvat.checkVAT('CZ25216791')).to.be.true;
        expect(jsvat.checkVAT('CZ25494538')).to.be.true;
        expect(jsvat.checkVAT('CZ25666011')).to.be.true;
        expect(jsvat.checkVAT('CZ25745271')).to.be.true;
        expect(jsvat.checkVAT('CZ26149206')).to.be.true;
        expect(jsvat.checkVAT('CZ26199696')).to.be.true;
        expect(jsvat.checkVAT('CZ26539446')).to.be.true;
        expect(jsvat.checkVAT('CZ27607461')).to.be.true;
        expect(jsvat.checkVAT('CZ27082440')).to.be.true;
        expect(jsvat.checkVAT('CZ27261417')).to.be.true;
        expect(jsvat.checkVAT('CZ27456927')).to.be.true;
        expect(jsvat.checkVAT('CZ27969118')).to.be.true;
        expect(jsvat.checkVAT('CZ28020715')).to.be.true;
        expect(jsvat.checkVAT('CZ24170593')).to.be.true;
        expect(jsvat.checkVAT('CZ27422534')).to.be.true;
        expect(jsvat.checkVAT('CZ29000335')).to.be.true;
        expect(jsvat.checkVAT('CZ29015243')).to.be.true;
        expect(jsvat.checkVAT('CZ44012373')).to.be.true;
        expect(jsvat.checkVAT('CZ44797699')).to.be.true;
        expect(jsvat.checkVAT('CZ45786259')).to.be.true;
        expect(jsvat.checkVAT('CZ46884513')).to.be.true;
        expect(jsvat.checkVAT('CZ47676795')).to.be.true;
        expect(jsvat.checkVAT('CZ47902442')).to.be.true;
        expect(jsvat.checkVAT('CZ49287371')).to.be.true;
        expect(jsvat.checkVAT('CZ49678329')).to.be.true;
        expect(jsvat.checkVAT('CZ49969820')).to.be.true;
        expect(jsvat.checkVAT('CZ60193336')).to.be.true;
        expect(jsvat.checkVAT('CZ61459640')).to.be.true;
        expect(jsvat.checkVAT('CZ61672530')).to.be.true;
        expect(jsvat.checkVAT('CZ62024922')).to.be.true;
        expect(jsvat.checkVAT('CZ63079453')).to.be.true;
        expect(jsvat.checkVAT('CZ63991705')).to.be.true;
        expect(jsvat.checkVAT('CZ64946274')).to.be.true;
        expect(jsvat.checkVAT('CZ67985882')).to.be.true;
        expect(jsvat.checkVAT('CZ680447748')).to.be.true;
        expect(jsvat.checkVAT('CZ699001236')).to.be.true;
        expect(jsvat.checkVAT('CZ699001510')).to.be.true;
        expect(jsvat.checkVAT('CZ699002447')).to.be.true;
        expect(jsvat.checkVAT('CZ70904901')).to.be.true;
        expect(jsvat.checkVAT('CZ699001237')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('CZ27 422 534')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('CZ-2742-2534')).to.be.true;
    });
});