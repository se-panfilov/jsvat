var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Norway not EU VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('NO864234232')).to.be.true;
        expect(VatChecker.checkVAT('NO919405619')).to.be.true;
        expect(VatChecker.checkVAT('NO924319623')).to.be.true;
        expect(VatChecker.checkVAT('NO936869335')).to.be.true;
        expect(VatChecker.checkVAT('NO938532397')).to.be.true;
        expect(VatChecker.checkVAT('NO939194428')).to.be.true;
        expect(VatChecker.checkVAT('NO939350675')).to.be.true;
        expect(VatChecker.checkVAT('NO945748931')).to.be.true;
        expect(VatChecker.checkVAT('NO946938505')).to.be.true;
        expect(VatChecker.checkVAT('NO951390534')).to.be.true;
        expect(VatChecker.checkVAT('NO959021740')).to.be.true;
        expect(VatChecker.checkVAT('NO962209017')).to.be.true;
        expect(VatChecker.checkVAT('NO965920358')).to.be.true;
        expect(VatChecker.checkVAT('NO966891750')).to.be.true;
        expect(VatChecker.checkVAT('NO971526157')).to.be.true;
        expect(VatChecker.checkVAT('NO975962229')).to.be.true;
        expect(VatChecker.checkVAT('NO976320344')).to.be.true;
        expect(VatChecker.checkVAT('NO976389387')).to.be.true;
        expect(VatChecker.checkVAT('NO976559029')).to.be.true;
        expect(VatChecker.checkVAT('NO976682157')).to.be.true;
        expect(VatChecker.checkVAT('NO979423705')).to.be.true;
        expect(VatChecker.checkVAT('NO979523483')).to.be.true;
        expect(VatChecker.checkVAT('NO981026330')).to.be.true;
        expect(VatChecker.checkVAT('NO981532848')).to.be.true;
        expect(VatChecker.checkVAT('NO892462402')).to.be.true;
        expect(VatChecker.checkVAT('NO982512069')).to.be.true;
        expect(VatChecker.checkVAT('NO982702887')).to.be.true;
        expect(VatChecker.checkVAT('NO982928885')).to.be.true;
        expect(VatChecker.checkVAT('NO983851800')).to.be.true;
        expect(VatChecker.checkVAT('NO984058098')).to.be.true;
        expect(VatChecker.checkVAT('NO985333629')).to.be.true;
        expect(VatChecker.checkVAT('NO985770573')).to.be.true;
        expect(VatChecker.checkVAT('NO987058765')).to.be.true;
        expect(VatChecker.checkVAT('NO988023671')).to.be.true;
        expect(VatChecker.checkVAT('NO990630372')).to.be.true;
        expect(VatChecker.checkVAT('NO992037601')).to.be.true;
        expect(VatChecker.checkVAT('NO992186208')).to.be.true;
        expect(VatChecker.checkVAT('NO992227079')).to.be.true;
        expect(VatChecker.checkVAT('NO992324252')).to.be.true;
        expect(VatChecker.checkVAT('NO992977558')).to.be.true;
        expect(VatChecker.checkVAT('NO992986913')).to.be.true;
        expect(VatChecker.checkVAT('NO993466344')).to.be.true;
        expect(VatChecker.checkVAT('NO998053501')).to.be.true;
        expect(VatChecker.checkVAT('NO995073331')).to.be.true;
        expect(VatChecker.checkVAT('NO995203626')).to.be.true;
        expect(VatChecker.checkVAT('NO996293815')).to.be.true;
        expect(VatChecker.checkVAT('NO996707415')).to.be.true;
        expect(VatChecker.checkVAT('NO996840506')).to.be.true;
        expect(VatChecker.checkVAT('NO999600476')).to.be.true;
        expect(VatChecker.checkVAT('NO96220901')).to.be.false;
        expect(VatChecker.checkVAT('NO962209018')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('NO91 94 05619')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('NO91-940-5619')).to.be.true;
    });
});