var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Greece VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('EL000000024')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000036')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000048')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000208')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000061')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000073')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000085')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000104')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000116')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000128')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000141')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000153')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000165')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000189')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000190')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000208')).to.be.true;
        expect(VatChecker.checkVatNum('EL022188887')).to.be.true;
        expect(VatChecker.checkVatNum('EL055679750')).to.be.true;
        expect(VatChecker.checkVatNum('EL059644936')).to.be.true;
        expect(VatChecker.checkVatNum('EL073313955')).to.be.true;
        expect(VatChecker.checkVatNum('EL090049627')).to.be.true;
        expect(VatChecker.checkVatNum('EL090077522')).to.be.true;
        expect(VatChecker.checkVatNum('EL090101655')).to.be.true;
        expect(VatChecker.checkVatNum('EL094012834')).to.be.true;
        expect(VatChecker.checkVatNum('EL094056437')).to.be.true;
        expect(VatChecker.checkVatNum('EL094112730')).to.be.true;
        expect(VatChecker.checkVatNum('EL094173630')).to.be.true;
        expect(VatChecker.checkVatNum('EL094237076')).to.be.true;
        expect(VatChecker.checkVatNum('EL094249481')).to.be.true;
        expect(VatChecker.checkVatNum('EL094253457')).to.be.true;
        expect(VatChecker.checkVatNum('EL094313643')).to.be.true;
        expect(VatChecker.checkVatNum('EL094322222')).to.be.true;
        expect(VatChecker.checkVatNum('EL094368710')).to.be.true;
        expect(VatChecker.checkVatNum('EL094403384')).to.be.true;
        expect(VatChecker.checkVatNum('EL095617741')).to.be.true;
        expect(VatChecker.checkVatNum('EL098002010')).to.be.true;
        expect(VatChecker.checkVatNum('EL098062736')).to.be.true;
        expect(VatChecker.checkVatNum('EL099370743')).to.be.true;
        expect(VatChecker.checkVatNum('EL099785242')).to.be.true;
        expect(VatChecker.checkVatNum('EL800420948')).to.be.true;
        expect(VatChecker.checkVatNum('EL997671771')).to.be.true;
        expect(VatChecker.checkVatNum('EL997786906')).to.be.true;
        expect(VatChecker.checkVatNum('EL998075960')).to.be.true;
        expect(VatChecker.checkVatNum('EL998180212')).to.be.true;
        expect(VatChecker.checkVatNum('EL998789236')).to.be.true;
        expect(VatChecker.checkVatNum('EL998920231')).to.be.true;
        expect(VatChecker.checkVatNum('EL000000022')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000032')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000042')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000202')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000062')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000072')).to.be.false;
        expect(VatChecker.checkVatNum('EL000000082')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});