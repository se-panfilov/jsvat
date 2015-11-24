var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Invalid VAT", function () {

    it("valid invalid VAT", function () {
        expect(jsvat.checkVAT('RO459491721323')).to.be.false;
    });

    it("long string number", function () {
        expect(jsvat.checkVAT('12321323123213456546')).to.be.false;
    });

    it("long digit number", function () {
        expect(jsvat.checkVAT(1123587867867843562321323123213)).to.be.false;
    });

    it("short digit number", function () {
        expect(jsvat.checkVAT(1)).to.be.false;
    });

    it("empty value", function () {
        expect(jsvat.checkVAT()).to.be.false;
    });

    it("empty string value", function () {
        expect(jsvat.checkVAT("")).to.be.false;
    });
});
