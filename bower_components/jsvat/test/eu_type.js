var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("EU type VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('EU372000052')).to.be.true;
        expect(jsvat.checkVAT('EU826001142')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('EU 8260 01142')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('EU826-001-142')).to.be.true;
    });
});