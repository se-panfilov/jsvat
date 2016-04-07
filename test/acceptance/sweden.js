var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Sweden VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('SE000000002601')).to.be.true;
        expect(jsvat.checkVAT('SE000000003401')).to.be.true;
        expect(jsvat.checkVAT('SE000000004201')).to.be.true;
        expect(jsvat.checkVAT('SE000000006701')).to.be.true;
        expect(jsvat.checkVAT('SE000000007501')).to.be.true;
        expect(jsvat.checkVAT('SE000000008301')).to.be.true;
        expect(jsvat.checkVAT('SE000000010901')).to.be.true;
        expect(jsvat.checkVAT('SE000000011701')).to.be.true;
        expect(jsvat.checkVAT('SE000000012501')).to.be.true;
        expect(jsvat.checkVAT('SE000000014101')).to.be.true;
        expect(jsvat.checkVAT('SE000000015801')).to.be.true;
        expect(jsvat.checkVAT('SE000000016601')).to.be.true;
        expect(jsvat.checkVAT('SE000000018201')).to.be.true;
        expect(jsvat.checkVAT('SE000000019001')).to.be.true;
        expect(jsvat.checkVAT('SE000000020801')).to.be.true;
        expect(jsvat.checkVAT('SE502069927701')).to.be.true;
        expect(jsvat.checkVAT('SE202100281701')).to.be.true;
        expect(jsvat.checkVAT('SE202100287401')).to.be.true;
        expect(jsvat.checkVAT('SE202100293201')).to.be.true;
        expect(jsvat.checkVAT('SE202100297301')).to.be.true;
        expect(jsvat.checkVAT('SE202100305401')).to.be.true;
        expect(jsvat.checkVAT('SE202100306201')).to.be.true;
        expect(jsvat.checkVAT('SE202100309601')).to.be.true;
        expect(jsvat.checkVAT('SE202100321101')).to.be.true;
        expect(jsvat.checkVAT('SE202100509101')).to.be.true;
        expect(jsvat.checkVAT('SE262000119401')).to.be.true;
        expect(jsvat.checkVAT('SE390806051401')).to.be.true;
        expect(jsvat.checkVAT('SE502052817901')).to.be.true;
        expect(jsvat.checkVAT('SE502067960001')).to.be.true;
        expect(jsvat.checkVAT('SE516403812601')).to.be.true;
        expect(jsvat.checkVAT('SE516405444601')).to.be.true;
        expect(jsvat.checkVAT('SE556035133901')).to.be.true;
        expect(jsvat.checkVAT('SE556101935601')).to.be.true;
        expect(jsvat.checkVAT('SE556126249301')).to.be.true;
        expect(jsvat.checkVAT('SE556188840401')).to.be.true;
        expect(jsvat.checkVAT('SE556263276901')).to.be.true;
        expect(jsvat.checkVAT('SE556366804401')).to.be.true;
        expect(jsvat.checkVAT('SE556399449901')).to.be.true;
        expect(jsvat.checkVAT('SE556464687401')).to.be.true;
        expect(jsvat.checkVAT('SE556500060001')).to.be.true;
        expect(jsvat.checkVAT('SE556555952201')).to.be.true;
        expect(jsvat.checkVAT('SE556576895801')).to.be.true;
        expect(jsvat.checkVAT('SE556654042201')).to.be.true;
        expect(jsvat.checkVAT('SE556785615701')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('SE556188840301')).to.be.false;
        expect(jsvat.checkVAT('SE000000002301')).to.be.false;
        expect(jsvat.checkVAT('SE000000003301')).to.be.false;
        expect(jsvat.checkVAT('SE000000004301')).to.be.false;
        expect(jsvat.checkVAT('SE000000006301')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('SE5561 8884 0401')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('SE556-1888-40401')).to.be.true;
    });
});