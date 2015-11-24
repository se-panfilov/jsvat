var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Hungary VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('HU10672101')).to.be.true;
        expect(VatChecker.checkVAT('HU10724318')).to.be.true;
        expect(VatChecker.checkVAT('HU10747759')).to.be.true;
        expect(VatChecker.checkVAT('HU10766172')).to.be.true;
        expect(VatChecker.checkVAT('HU10875153')).to.be.true;
        expect(VatChecker.checkVAT('HU10891748')).to.be.true;
        expect(VatChecker.checkVAT('HU11125248')).to.be.true;
        expect(VatChecker.checkVAT('HU11162973')).to.be.true;
        expect(VatChecker.checkVAT('HU11342261')).to.be.true;
        expect(VatChecker.checkVAT('HU11377304')).to.be.true;
        expect(VatChecker.checkVAT('HU11457695')).to.be.true;
        expect(VatChecker.checkVAT('HU11683582')).to.be.true;
        expect(VatChecker.checkVAT('HU11879318')).to.be.true;
        expect(VatChecker.checkVAT('HU12082348')).to.be.true;
        expect(VatChecker.checkVAT('HU12194339')).to.be.true;
        expect(VatChecker.checkVAT('HU12476365')).to.be.true;
        expect(VatChecker.checkVAT('HU12509403')).to.be.true;
        expect(VatChecker.checkVAT('HU12618398')).to.be.true;
        expect(VatChecker.checkVAT('HU12723650')).to.be.true;
        expect(VatChecker.checkVAT('HU12783166')).to.be.true;
        expect(VatChecker.checkVAT('HU12804825')).to.be.true;
        expect(VatChecker.checkVAT('HU12840937')).to.be.true;
        expect(VatChecker.checkVAT('HU13122605')).to.be.true;
        expect(VatChecker.checkVAT('HU13245658')).to.be.true;
        expect(VatChecker.checkVAT('HU13277279')).to.be.true;
        expect(VatChecker.checkVAT('HU13460370')).to.be.true;
        expect(VatChecker.checkVAT('HU13532774')).to.be.true;
        expect(VatChecker.checkVAT('HU13597986')).to.be.true;
        expect(VatChecker.checkVAT('HU13846077')).to.be.true;
        expect(VatChecker.checkVAT('HU13949235')).to.be.true;
        expect(VatChecker.checkVAT('HU14860955')).to.be.true;
        expect(VatChecker.checkVAT('HU14915969')).to.be.true;
        expect(VatChecker.checkVAT('HU15308744')).to.be.true;
        expect(VatChecker.checkVAT('HU15329499')).to.be.true;
        expect(VatChecker.checkVAT('HU15490012')).to.be.true;
        expect(VatChecker.checkVAT('HU15598323')).to.be.true;
        expect(VatChecker.checkVAT('HU17781279')).to.be.true;
        expect(VatChecker.checkVAT('HU18173967')).to.be.true;
        expect(VatChecker.checkVAT('HU18764325')).to.be.true;
        expect(VatChecker.checkVAT('HU19002464')).to.be.true;
        expect(VatChecker.checkVAT('HU19023229')).to.be.true;
        expect(VatChecker.checkVAT('HU22919456')).to.be.true;
        expect(VatChecker.checkVAT('HU23001363')).to.be.true;
        expect(VatChecker.checkVAT('HU23157653')).to.be.true;
        expect(VatChecker.checkVAT('HU23058176')).to.be.true;
        expect(VatChecker.checkVAT('HU23143409')).to.be.true;
        expect(VatChecker.checkVAT('HU23157653')).to.be.true;
        expect(VatChecker.checkVAT('HU23474178')).to.be.true;
        expect(VatChecker.checkVAT('HU63731758')).to.be.true;
        expect(VatChecker.checkVAT('HU65730980')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('HU65730981')).to.be.false;
        expect(VatChecker.checkVAT('HU65731980')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('HU1 18793 18')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('HU11-879-318')).to.be.true;
    });
});