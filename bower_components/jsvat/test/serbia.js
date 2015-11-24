var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Serbia VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('RS100010812')).to.be.true;
        expect(jsvat.checkVAT('RS100182160')).to.be.true;
        expect(jsvat.checkVAT('RS100262959')).to.be.true;
        expect(jsvat.checkVAT('RS101052694')).to.be.true;
        expect(jsvat.checkVAT('RS101123484')).to.be.true;
        expect(jsvat.checkVAT('RS101511068')).to.be.true;
        expect(jsvat.checkVAT('RS101626723')).to.be.true;
        expect(jsvat.checkVAT('RS101660236')).to.be.true;
        expect(jsvat.checkVAT('RS101917688')).to.be.true;
        expect(jsvat.checkVAT('RS103257368')).to.be.true;
        expect(jsvat.checkVAT('RS102898984')).to.be.true;
        expect(jsvat.checkVAT('RS104774509')).to.be.true;
        expect(jsvat.checkVAT('RS105066236')).to.be.true;
        expect(jsvat.checkVAT('RS105101011')).to.be.true;
        expect(jsvat.checkVAT('RS105795301')).to.be.true;
        expect(jsvat.checkVAT('RS105922971')).to.be.true;
        expect(jsvat.checkVAT('RS106193133')).to.be.true;
        expect(jsvat.checkVAT('RS106414286')).to.be.true;
        expect(jsvat.checkVAT('RS106963932')).to.be.true;
        expect(jsvat.checkVAT('RS107382147')).to.be.true;
        expect(jsvat.checkVAT('RS129391320')).to.be.true;
        expect(jsvat.checkVAT('RS12939132')).to.be.false;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('RS1293913201')).to.be.false;
        expect(jsvat.checkVAT('RS129391321')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('RS1 015 11068')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('RS101-511-068')).to.be.true;
    });
});