var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Finland VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('FI09853608')).to.be.true;
        expect(jsvat.checkVAT('FI00000027')).to.be.true;
        expect(jsvat.checkVAT('FI00000035')).to.be.true;
        expect(jsvat.checkVAT('FI00000043')).to.be.true;
        expect(jsvat.checkVAT('FI00000174')).to.be.true;
        expect(jsvat.checkVAT('FI00000078')).to.be.true;
        expect(jsvat.checkVAT('FI00000086')).to.be.true;
        expect(jsvat.checkVAT('FI00000094')).to.be.true;
        expect(jsvat.checkVAT('FI00000115')).to.be.true;
        expect(jsvat.checkVAT('FI00000123')).to.be.true;
        expect(jsvat.checkVAT('FI00000131')).to.be.true;
        expect(jsvat.checkVAT('FI00000166')).to.be.true;
        expect(jsvat.checkVAT('FI00000174')).to.be.true;
        expect(jsvat.checkVAT('FI00000182')).to.be.true;
        expect(jsvat.checkVAT('FI00000203')).to.be.true;
        expect(jsvat.checkVAT('FI00000211')).to.be.true;
        expect(jsvat.checkVAT('FI00000238')).to.be.true;
        expect(jsvat.checkVAT('FI01244162')).to.be.true;
        expect(jsvat.checkVAT('FI02459042')).to.be.true;
        expect(jsvat.checkVAT('FI06312080')).to.be.true;
        expect(jsvat.checkVAT('FI08405256')).to.be.true;
        expect(jsvat.checkVAT('FI09441865')).to.be.true;
        expect(jsvat.checkVAT('FI08326937')).to.be.true;
        expect(jsvat.checkVAT('FI10154054')).to.be.true;
        expect(jsvat.checkVAT('FI10227508')).to.be.true;
        expect(jsvat.checkVAT('FI15380325')).to.be.true;
        expect(jsvat.checkVAT('FI15501019')).to.be.true;
        expect(jsvat.checkVAT('FI15482348')).to.be.true;
        expect(jsvat.checkVAT('FI15719544')).to.be.true;
        expect(jsvat.checkVAT('FI16802358')).to.be.true;
        expect(jsvat.checkVAT('FI17377883')).to.be.true;
        expect(jsvat.checkVAT('FI17405469')).to.be.true;
        expect(jsvat.checkVAT('FI17764656')).to.be.true;
        expect(jsvat.checkVAT('FI18261444')).to.be.true;
        expect(jsvat.checkVAT('FI18919760')).to.be.true;
        expect(jsvat.checkVAT('FI20303674')).to.be.true;
        expect(jsvat.checkVAT('FI21044950')).to.be.true;
        expect(jsvat.checkVAT('FI22780669')).to.be.true;
        expect(jsvat.checkVAT('FI22811357')).to.be.true;
        expect(jsvat.checkVAT('FI22283574')).to.be.true;
        expect(jsvat.checkVAT('FI22969621')).to.be.true;
        expect(jsvat.checkVAT('FI22975669')).to.be.true;
        expect(jsvat.checkVAT('FI24498085')).to.be.true;
        expect(jsvat.checkVAT('FI24710461')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('FI09853601')).to.be.false;
        expect(jsvat.checkVAT('FI00000023')).to.be.false;
        expect(jsvat.checkVAT('FI00000036')).to.be.false;
        expect(jsvat.checkVAT('FI00000048')).to.be.false;
        expect(jsvat.checkVAT('FI00000173')).to.be.false;
        expect(jsvat.checkVAT('FI00000071')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('FI22 969 621')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('FI2-29696-21')).to.be.true;
    });
});