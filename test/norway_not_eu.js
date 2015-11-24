var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Norway not EU VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('NO864234232')).to.be.true;
        expect(jsvat.checkVAT('NO919405619')).to.be.true;
        expect(jsvat.checkVAT('NO924319623')).to.be.true;
        expect(jsvat.checkVAT('NO936869335')).to.be.true;
        expect(jsvat.checkVAT('NO938532397')).to.be.true;
        expect(jsvat.checkVAT('NO939194428')).to.be.true;
        expect(jsvat.checkVAT('NO939350675')).to.be.true;
        expect(jsvat.checkVAT('NO945748931')).to.be.true;
        expect(jsvat.checkVAT('NO946938505')).to.be.true;
        expect(jsvat.checkVAT('NO951390534')).to.be.true;
        expect(jsvat.checkVAT('NO959021740')).to.be.true;
        expect(jsvat.checkVAT('NO962209017')).to.be.true;
        expect(jsvat.checkVAT('NO965920358')).to.be.true;
        expect(jsvat.checkVAT('NO966891750')).to.be.true;
        expect(jsvat.checkVAT('NO971526157')).to.be.true;
        expect(jsvat.checkVAT('NO975962229')).to.be.true;
        expect(jsvat.checkVAT('NO976320344')).to.be.true;
        expect(jsvat.checkVAT('NO976389387')).to.be.true;
        expect(jsvat.checkVAT('NO976559029')).to.be.true;
        expect(jsvat.checkVAT('NO976682157')).to.be.true;
        expect(jsvat.checkVAT('NO979423705')).to.be.true;
        expect(jsvat.checkVAT('NO979523483')).to.be.true;
        expect(jsvat.checkVAT('NO981026330')).to.be.true;
        expect(jsvat.checkVAT('NO981532848')).to.be.true;
        expect(jsvat.checkVAT('NO892462402')).to.be.true;
        expect(jsvat.checkVAT('NO982512069')).to.be.true;
        expect(jsvat.checkVAT('NO982702887')).to.be.true;
        expect(jsvat.checkVAT('NO982928885')).to.be.true;
        expect(jsvat.checkVAT('NO983851800')).to.be.true;
        expect(jsvat.checkVAT('NO984058098')).to.be.true;
        expect(jsvat.checkVAT('NO985333629')).to.be.true;
        expect(jsvat.checkVAT('NO985770573')).to.be.true;
        expect(jsvat.checkVAT('NO987058765')).to.be.true;
        expect(jsvat.checkVAT('NO988023671')).to.be.true;
        expect(jsvat.checkVAT('NO990630372')).to.be.true;
        expect(jsvat.checkVAT('NO992037601')).to.be.true;
        expect(jsvat.checkVAT('NO992186208')).to.be.true;
        expect(jsvat.checkVAT('NO992227079')).to.be.true;
        expect(jsvat.checkVAT('NO992324252')).to.be.true;
        expect(jsvat.checkVAT('NO992977558')).to.be.true;
        expect(jsvat.checkVAT('NO992986913')).to.be.true;
        expect(jsvat.checkVAT('NO993466344')).to.be.true;
        expect(jsvat.checkVAT('NO998053501')).to.be.true;
        expect(jsvat.checkVAT('NO995073331')).to.be.true;
        expect(jsvat.checkVAT('NO995203626')).to.be.true;
        expect(jsvat.checkVAT('NO996293815')).to.be.true;
        expect(jsvat.checkVAT('NO996707415')).to.be.true;
        expect(jsvat.checkVAT('NO996840506')).to.be.true;
        expect(jsvat.checkVAT('NO999600476')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('NO96220901')).to.be.false;
        expect(jsvat.checkVAT('NO962209018')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('NO91 94 05619')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('NO91-940-5619')).to.be.true;
    });
});