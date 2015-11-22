var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Norway not EU VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('NO864234232')).to.be.true;
        expect(VatChecker.checkVatNum('NO919405619')).to.be.true;
        expect(VatChecker.checkVatNum('NO924319623')).to.be.true;
        expect(VatChecker.checkVatNum('NO936869335')).to.be.true;
        expect(VatChecker.checkVatNum('NO938532397')).to.be.true;
        expect(VatChecker.checkVatNum('NO939194428')).to.be.true;
        expect(VatChecker.checkVatNum('NO939350675')).to.be.true;
        expect(VatChecker.checkVatNum('NO945748931')).to.be.true;
        expect(VatChecker.checkVatNum('NO946938505')).to.be.true;
        expect(VatChecker.checkVatNum('NO951390534')).to.be.true;
        expect(VatChecker.checkVatNum('NO959021740')).to.be.true;
        expect(VatChecker.checkVatNum('NO962209017')).to.be.true;
        expect(VatChecker.checkVatNum('NO965920358')).to.be.true;
        expect(VatChecker.checkVatNum('NO966891750')).to.be.true;
        expect(VatChecker.checkVatNum('NO971526157')).to.be.true;
        expect(VatChecker.checkVatNum('NO975962229')).to.be.true;
        expect(VatChecker.checkVatNum('NO976320344')).to.be.true;
        expect(VatChecker.checkVatNum('NO976389387')).to.be.true;
        expect(VatChecker.checkVatNum('NO976559029')).to.be.true;
        expect(VatChecker.checkVatNum('NO976682157')).to.be.true;
        expect(VatChecker.checkVatNum('NO979423705')).to.be.true;
        expect(VatChecker.checkVatNum('NO979523483')).to.be.true;
        expect(VatChecker.checkVatNum('NO981026330')).to.be.true;
        expect(VatChecker.checkVatNum('NO981532848')).to.be.true;
        expect(VatChecker.checkVatNum('NO892462402')).to.be.true;
        expect(VatChecker.checkVatNum('NO982512069')).to.be.true;
        expect(VatChecker.checkVatNum('NO982702887')).to.be.true;
        expect(VatChecker.checkVatNum('NO982928885')).to.be.true;
        expect(VatChecker.checkVatNum('NO983851800')).to.be.true;
        expect(VatChecker.checkVatNum('NO984058098')).to.be.true;
        expect(VatChecker.checkVatNum('NO985333629')).to.be.true;
        expect(VatChecker.checkVatNum('NO985770573')).to.be.true;
        expect(VatChecker.checkVatNum('NO987058765')).to.be.true;
        expect(VatChecker.checkVatNum('NO988023671')).to.be.true;
        expect(VatChecker.checkVatNum('NO990630372')).to.be.true;
        expect(VatChecker.checkVatNum('NO992037601')).to.be.true;
        expect(VatChecker.checkVatNum('NO992186208')).to.be.true;
        expect(VatChecker.checkVatNum('NO992227079')).to.be.true;
        expect(VatChecker.checkVatNum('NO992324252')).to.be.true;
        expect(VatChecker.checkVatNum('NO992977558')).to.be.true;
        expect(VatChecker.checkVatNum('NO992986913')).to.be.true;
        expect(VatChecker.checkVatNum('NO993466344')).to.be.true;
        expect(VatChecker.checkVatNum('NO998053501')).to.be.true;
        expect(VatChecker.checkVatNum('NO995073331')).to.be.true;
        expect(VatChecker.checkVatNum('NO995203626')).to.be.true;
        expect(VatChecker.checkVatNum('NO996293815')).to.be.true;
        expect(VatChecker.checkVatNum('NO996707415')).to.be.true;
        expect(VatChecker.checkVatNum('NO996840506')).to.be.true;
        expect(VatChecker.checkVatNum('NO999600476')).to.be.true;
        expect(VatChecker.checkVatNum('NO96220901')).to.be.false;
        expect(VatChecker.checkVatNum('NO962209018')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});