var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Slovenia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('SI10693661')).to.be.true;
        expect(VatChecker.checkVAT('SI10830316')).to.be.true;
        expect(VatChecker.checkVAT('SI11427205')).to.be.true;
        expect(VatChecker.checkVAT('SI14246821')).to.be.true;
        expect(VatChecker.checkVAT('SI14824221')).to.be.true;
        expect(VatChecker.checkVAT('SI15779092')).to.be.true;
        expect(VatChecker.checkVAT('SI17659957')).to.be.true;
        expect(VatChecker.checkVAT('SI23512580')).to.be.true;
        expect(VatChecker.checkVAT('SI23887729')).to.be.true;
        expect(VatChecker.checkVAT('SI24995975')).to.be.true;
        expect(VatChecker.checkVAT('SI29664373')).to.be.true;
        expect(VatChecker.checkVAT('SI31162991')).to.be.true;
        expect(VatChecker.checkVAT('SI37923331')).to.be.true;
        expect(VatChecker.checkVAT('SI40226743')).to.be.true;
        expect(VatChecker.checkVAT('SI42780071')).to.be.true;
        expect(VatChecker.checkVAT('SI44156111')).to.be.true;
        expect(VatChecker.checkVAT('SI45835985')).to.be.true;
        expect(VatChecker.checkVAT('SI47431857')).to.be.true;
        expect(VatChecker.checkVAT('SI47640308')).to.be.true;
        expect(VatChecker.checkVAT('SI47992115')).to.be.true;
        expect(VatChecker.checkVAT('SI49449389')).to.be.true;
        expect(VatChecker.checkVAT('SI50223054')).to.be.true;
        expect(VatChecker.checkVAT('SI51049406')).to.be.true;
        expect(VatChecker.checkVAT('SI51387417')).to.be.true;
        expect(VatChecker.checkVAT('SI52847349')).to.be.true;
        expect(VatChecker.checkVAT('SI57635773')).to.be.true;
        expect(VatChecker.checkVAT('SI59038551')).to.be.true;
        expect(VatChecker.checkVAT('SI63580152')).to.be.true;
        expect(VatChecker.checkVAT('SI64496481')).to.be.true;
        expect(VatChecker.checkVAT('SI65056345')).to.be.true;
        expect(VatChecker.checkVAT('SI67593321')).to.be.true;
        expect(VatChecker.checkVAT('SI68297530')).to.be.true;
        expect(VatChecker.checkVAT('SI73567906')).to.be.true;
        expect(VatChecker.checkVAT('SI80040306')).to.be.true;
        expect(VatChecker.checkVAT('SI81716338')).to.be.true;
        expect(VatChecker.checkVAT('SI81931247')).to.be.true;
        expect(VatChecker.checkVAT('SI82155135')).to.be.true;
        expect(VatChecker.checkVAT('SI84667044')).to.be.true;
        expect(VatChecker.checkVAT('SI87916452')).to.be.true;
        expect(VatChecker.checkVAT('SI91132550')).to.be.true;
        expect(VatChecker.checkVAT('SI92351069')).to.be.true;
        expect(VatChecker.checkVAT('SI94314527')).to.be.true;
        expect(VatChecker.checkVAT('SI98511734')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('SI05936241')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('SI2 9664373')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('SI2-966-4373')).to.be.true;
    });
});