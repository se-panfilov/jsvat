var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Slovenia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('SI10693661')).to.be.true;
        expect(VatChecker.checkVatNum('SI10830316')).to.be.true;
        expect(VatChecker.checkVatNum('SI11427205')).to.be.true;
        expect(VatChecker.checkVatNum('SI14246821')).to.be.true;
        expect(VatChecker.checkVatNum('SI14824221')).to.be.true;
        expect(VatChecker.checkVatNum('SI15779092')).to.be.true;
        expect(VatChecker.checkVatNum('SI17659957')).to.be.true;
        expect(VatChecker.checkVatNum('SI23512580')).to.be.true;
        expect(VatChecker.checkVatNum('SI23887729')).to.be.true;
        expect(VatChecker.checkVatNum('SI24995975')).to.be.true;
        expect(VatChecker.checkVatNum('SI29664373')).to.be.true;
        expect(VatChecker.checkVatNum('SI31162991')).to.be.true;
        expect(VatChecker.checkVatNum('SI37923331')).to.be.true;
        expect(VatChecker.checkVatNum('SI40226743')).to.be.true;
        expect(VatChecker.checkVatNum('SI42780071')).to.be.true;
        expect(VatChecker.checkVatNum('SI44156111')).to.be.true;
        expect(VatChecker.checkVatNum('SI45835985')).to.be.true;
        expect(VatChecker.checkVatNum('SI47431857')).to.be.true;
        expect(VatChecker.checkVatNum('SI47640308')).to.be.true;
        expect(VatChecker.checkVatNum('SI47992115')).to.be.true;
        expect(VatChecker.checkVatNum('SI49449389')).to.be.true;
        expect(VatChecker.checkVatNum('SI50223054')).to.be.true;
        expect(VatChecker.checkVatNum('SI51049406')).to.be.true;
        expect(VatChecker.checkVatNum('SI51387417')).to.be.true;
        expect(VatChecker.checkVatNum('SI52847349')).to.be.true;
        expect(VatChecker.checkVatNum('SI57635773')).to.be.true;
        expect(VatChecker.checkVatNum('SI59038551')).to.be.true;
        expect(VatChecker.checkVatNum('SI63580152')).to.be.true;
        expect(VatChecker.checkVatNum('SI64496481')).to.be.true;
        expect(VatChecker.checkVatNum('SI65056345')).to.be.true;
        expect(VatChecker.checkVatNum('SI67593321')).to.be.true;
        expect(VatChecker.checkVatNum('SI68297530')).to.be.true;
        expect(VatChecker.checkVatNum('SI73567906')).to.be.true;
        expect(VatChecker.checkVatNum('SI80040306')).to.be.true;
        expect(VatChecker.checkVatNum('SI81716338')).to.be.true;
        expect(VatChecker.checkVatNum('SI81931247')).to.be.true;
        expect(VatChecker.checkVatNum('SI82155135')).to.be.true;
        expect(VatChecker.checkVatNum('SI84667044')).to.be.true;
        expect(VatChecker.checkVatNum('SI87916452')).to.be.true;
        expect(VatChecker.checkVatNum('SI91132550')).to.be.true;
        expect(VatChecker.checkVatNum('SI92351069')).to.be.true;
        expect(VatChecker.checkVatNum('SI94314527')).to.be.true;
        expect(VatChecker.checkVatNum('SI98511734')).to.be.true;
        expect(VatChecker.checkVatNum('SI05936241')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});