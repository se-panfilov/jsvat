var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Greece VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('EL000000024')).to.be.true;
        expect(VatChecker.checkVAT('EL000000036')).to.be.true;
        expect(VatChecker.checkVAT('EL000000048')).to.be.true;
        expect(VatChecker.checkVAT('EL000000208')).to.be.true;
        expect(VatChecker.checkVAT('EL000000061')).to.be.true;
        expect(VatChecker.checkVAT('EL000000073')).to.be.true;
        expect(VatChecker.checkVAT('EL000000085')).to.be.true;
        expect(VatChecker.checkVAT('EL000000104')).to.be.true;
        expect(VatChecker.checkVAT('EL000000116')).to.be.true;
        expect(VatChecker.checkVAT('EL000000128')).to.be.true;
        expect(VatChecker.checkVAT('EL000000141')).to.be.true;
        expect(VatChecker.checkVAT('EL000000153')).to.be.true;
        expect(VatChecker.checkVAT('EL000000165')).to.be.true;
        expect(VatChecker.checkVAT('EL000000189')).to.be.true;
        expect(VatChecker.checkVAT('EL000000190')).to.be.true;
        expect(VatChecker.checkVAT('EL000000208')).to.be.true;
        expect(VatChecker.checkVAT('EL022188887')).to.be.true;
        expect(VatChecker.checkVAT('EL055679750')).to.be.true;
        expect(VatChecker.checkVAT('EL059644936')).to.be.true;
        expect(VatChecker.checkVAT('EL073313955')).to.be.true;
        expect(VatChecker.checkVAT('EL090049627')).to.be.true;
        expect(VatChecker.checkVAT('EL090077522')).to.be.true;
        expect(VatChecker.checkVAT('EL090101655')).to.be.true;
        expect(VatChecker.checkVAT('EL094012834')).to.be.true;
        expect(VatChecker.checkVAT('EL094056437')).to.be.true;
        expect(VatChecker.checkVAT('EL094112730')).to.be.true;
        expect(VatChecker.checkVAT('EL094173630')).to.be.true;
        expect(VatChecker.checkVAT('EL094237076')).to.be.true;
        expect(VatChecker.checkVAT('EL094249481')).to.be.true;
        expect(VatChecker.checkVAT('EL094253457')).to.be.true;
        expect(VatChecker.checkVAT('EL094313643')).to.be.true;
        expect(VatChecker.checkVAT('EL094322222')).to.be.true;
        expect(VatChecker.checkVAT('EL094368710')).to.be.true;
        expect(VatChecker.checkVAT('EL094403384')).to.be.true;
        expect(VatChecker.checkVAT('EL095617741')).to.be.true;
        expect(VatChecker.checkVAT('EL098002010')).to.be.true;
        expect(VatChecker.checkVAT('EL098062736')).to.be.true;
        expect(VatChecker.checkVAT('EL099370743')).to.be.true;
        expect(VatChecker.checkVAT('EL099785242')).to.be.true;
        expect(VatChecker.checkVAT('EL800420948')).to.be.true;
        expect(VatChecker.checkVAT('EL997671771')).to.be.true;
        expect(VatChecker.checkVAT('EL997786906')).to.be.true;
        expect(VatChecker.checkVAT('EL998075960')).to.be.true;
        expect(VatChecker.checkVAT('EL998180212')).to.be.true;
        expect(VatChecker.checkVAT('EL998789236')).to.be.true;
        expect(VatChecker.checkVAT('EL998920231')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('EL000000022')).to.be.false;
        expect(VatChecker.checkVAT('EL000000032')).to.be.false;
        expect(VatChecker.checkVAT('EL000000042')).to.be.false;
        expect(VatChecker.checkVAT('EL000000202')).to.be.false;
        expect(VatChecker.checkVAT('EL000000062')).to.be.false;
        expect(VatChecker.checkVAT('EL000000072')).to.be.false;
        expect(VatChecker.checkVAT('EL000000082')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('EL0 0000 0165')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('EL00-0000-165')).to.be.true;
    });
});