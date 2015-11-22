var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Sweden VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('SE000000002601')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000003401')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000004201')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000006701')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000007501')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000008301')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000010901')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000011701')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000012501')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000014101')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000015801')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000016601')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000018201')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000019001')).to.be.true;
        expect(VatChecker.checkVatNum('SE000000020801')).to.be.true;
        expect(VatChecker.checkVatNum('SE502069927701')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100281701')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100287401')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100293201')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100297301')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100305401')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100306201')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100309601')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100321101')).to.be.true;
        expect(VatChecker.checkVatNum('SE202100509101')).to.be.true;
        expect(VatChecker.checkVatNum('SE262000119401')).to.be.true;
        expect(VatChecker.checkVatNum('SE390806051401')).to.be.true;
        expect(VatChecker.checkVatNum('SE502052817901')).to.be.true;
        expect(VatChecker.checkVatNum('SE502067960001')).to.be.true;
        expect(VatChecker.checkVatNum('SE516403812601')).to.be.true;
        expect(VatChecker.checkVatNum('SE516405444601')).to.be.true;
        expect(VatChecker.checkVatNum('SE556035133901')).to.be.true;
        expect(VatChecker.checkVatNum('SE556101935601')).to.be.true;
        expect(VatChecker.checkVatNum('SE556126249301')).to.be.true;
        expect(VatChecker.checkVatNum('SE556188840401')).to.be.true;
        expect(VatChecker.checkVatNum('SE556263276901')).to.be.true;
        expect(VatChecker.checkVatNum('SE556366804401')).to.be.true;
        expect(VatChecker.checkVatNum('SE556399449901')).to.be.true;
        expect(VatChecker.checkVatNum('SE556464687401')).to.be.true;
        expect(VatChecker.checkVatNum('SE556500060001')).to.be.true;
        expect(VatChecker.checkVatNum('SE556555952201')).to.be.true;
        expect(VatChecker.checkVatNum('SE556576895801')).to.be.true;
        expect(VatChecker.checkVatNum('SE556654042201')).to.be.true;
        expect(VatChecker.checkVatNum('SE556785615701')).to.be.true;
        expect(VatChecker.checkVatNum('SE556188840301')).to.be.false;
        expect(VatChecker.checkVatNum('SE000000002301')).to.be.false;
        expect(VatChecker.checkVatNum('SE000000003301')).to.be.false;
        expect(VatChecker.checkVatNum('SE000000004301')).to.be.false;
        expect(VatChecker.checkVatNum('SE000000006301')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});