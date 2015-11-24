var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("France VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('FR00000000190')).to.be.true;
        expect(jsvat.checkVAT('FR00300076965')).to.be.true;
        expect(jsvat.checkVAT('FR00303656847')).to.be.true;
        expect(jsvat.checkVAT('FR01000000158')).to.be.true;
        expect(jsvat.checkVAT('FR03552081317')).to.be.true;
        expect(jsvat.checkVAT('FR03512803495')).to.be.true;
        expect(jsvat.checkVAT('FR03784359069')).to.be.true;
        expect(jsvat.checkVAT('FR04494487341')).to.be.true;
        expect(jsvat.checkVAT('FR05442977302')).to.be.true;
        expect(jsvat.checkVAT('FR17000000034')).to.be.true;
        expect(jsvat.checkVAT('FR19000000067')).to.be.true;
        expect(jsvat.checkVAT('FR43000000075')).to.be.true;
        expect(jsvat.checkVAT('FR47000000141')).to.be.true;
        expect(jsvat.checkVAT('FR48000000109')).to.be.true;
        expect(jsvat.checkVAT('FR54000000208')).to.be.true;
        expect(jsvat.checkVAT('FR13393892815')).to.be.true;
        expect(jsvat.checkVAT('FR14722057460')).to.be.true;
        expect(jsvat.checkVAT('FR20562016774')).to.be.true;
        expect(jsvat.checkVAT('FR25000000166')).to.be.true;
        expect(jsvat.checkVAT('FR22528117732')).to.be.true;
        expect(jsvat.checkVAT('FR25432701258')).to.be.true;
        expect(jsvat.checkVAT('FR27514868827')).to.be.true;
        expect(jsvat.checkVAT('FR29312010820')).to.be.true;
        expect(jsvat.checkVAT('FR31387589179')).to.be.true;
        expect(jsvat.checkVAT('FR38438710865')).to.be.true;
        expect(jsvat.checkVAT('FR39412658767')).to.be.true;
        expect(jsvat.checkVAT('FR40303265045')).to.be.true;
        expect(jsvat.checkVAT('FR40391895109')).to.be.true;
        expect(jsvat.checkVAT('FR40402628838')).to.be.true;
        expect(jsvat.checkVAT('FR41000000042')).to.be.true;
        expect(jsvat.checkVAT('FR41343848552')).to.be.true;
        expect(jsvat.checkVAT('FR42403335904')).to.be.true;
        expect(jsvat.checkVAT('FR42504207853')).to.be.true;
        expect(jsvat.checkVAT('FR44527865992')).to.be.true;
        expect(jsvat.checkVAT('FR45395080138')).to.be.true;
        expect(jsvat.checkVAT('FR45542065305')).to.be.true;
        expect(jsvat.checkVAT('FR46400477089')).to.be.true;
        expect(jsvat.checkVAT('FR47323875187')).to.be.true;
        expect(jsvat.checkVAT('FR47323875187')).to.be.true;
        expect(jsvat.checkVAT('FR53418304010')).to.be.true;
        expect(jsvat.checkVAT('FR55440243988')).to.be.true;
        expect(jsvat.checkVAT('FR55480081306')).to.be.true;
        expect(jsvat.checkVAT('FR55338966385')).to.be.true;
        expect(jsvat.checkVAT('FR56439795816')).to.be.true;
        expect(jsvat.checkVAT('FR57609803416')).to.be.true;
        expect(jsvat.checkVAT('FR58399360817')).to.be.true;
        expect(jsvat.checkVAT('FR58499528255')).to.be.true;
        expect(jsvat.checkVAT('FR61300986619')).to.be.true;
        expect(jsvat.checkVAT('FR61954506077')).to.be.true;
        expect(jsvat.checkVAT('FR64518539093')).to.be.true;
        expect(jsvat.checkVAT('FR65489465542')).to.be.true;
        expect(jsvat.checkVAT('FR67000000083')).to.be.true;
        expect(jsvat.checkVAT('FR71383076817')).to.be.true;
        expect(jsvat.checkVAT('FR72000000117')).to.be.true;
        expect(jsvat.checkVAT('FR73000000182')).to.be.true;
        expect(jsvat.checkVAT('FR74532287844')).to.be.true;
        expect(jsvat.checkVAT('FR82494628696')).to.be.true;
        expect(jsvat.checkVAT('FR82542065479')).to.be.true;
        expect(jsvat.checkVAT('FR83404833048')).to.be.true;
        expect(jsvat.checkVAT('FR85418228102')).to.be.true;
        expect(jsvat.checkVAT('FR88414997130')).to.be.true;
        expect(jsvat.checkVAT('FR89540090917')).to.be.true;
        expect(jsvat.checkVAT('FR90000000026')).to.be.true;
        expect(jsvat.checkVAT('FR90524670213')).to.be.true;
        expect(jsvat.checkVAT('FR96000000125')).to.be.true;
        expect(jsvat.checkVAT('FRA0123456789')).to.be.true;
        expect(jsvat.checkVAT('FR0A012345678')).to.be.true;
        expect(jsvat.checkVAT('FRAB012345678')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('FR00300076967')).to.be.false;
        expect(jsvat.checkVAT('FR90000000027')).to.be.false;
        expect(jsvat.checkVAT('FR17000000037')).to.be.false;
        expect(jsvat.checkVAT('FR41000000047')).to.be.false;
        expect(jsvat.checkVAT('FR01000000157')).to.be.false;
        expect(jsvat.checkVAT('FR19000000068')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('FR895 4009 0917')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('FR89-54009091-7')).to.be.true;
    });
});