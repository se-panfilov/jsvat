var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Hungary VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('HU10672101')).to.be.true;
        expect(VatChecker.checkVatNum('HU10724318')).to.be.true;
        expect(VatChecker.checkVatNum('HU10747759')).to.be.true;
        expect(VatChecker.checkVatNum('HU10766172')).to.be.true;
        expect(VatChecker.checkVatNum('HU10875153')).to.be.true;
        expect(VatChecker.checkVatNum('HU10891748')).to.be.true;
        expect(VatChecker.checkVatNum('HU11125248')).to.be.true;
        expect(VatChecker.checkVatNum('HU11162973')).to.be.true;
        expect(VatChecker.checkVatNum('HU11342261')).to.be.true;
        expect(VatChecker.checkVatNum('HU11377304')).to.be.true;
        expect(VatChecker.checkVatNum('HU11457695')).to.be.true;
        expect(VatChecker.checkVatNum('HU11683582')).to.be.true;
        expect(VatChecker.checkVatNum('HU11879318')).to.be.true;
        expect(VatChecker.checkVatNum('HU12082348')).to.be.true;
        expect(VatChecker.checkVatNum('HU12194339')).to.be.true;
        expect(VatChecker.checkVatNum('HU12476365')).to.be.true;
        expect(VatChecker.checkVatNum('HU12509403')).to.be.true;
        expect(VatChecker.checkVatNum('HU12618398')).to.be.true;
        expect(VatChecker.checkVatNum('HU12723650')).to.be.true;
        expect(VatChecker.checkVatNum('HU12783166')).to.be.true;
        expect(VatChecker.checkVatNum('HU12804825')).to.be.true;
        expect(VatChecker.checkVatNum('HU12840937')).to.be.true;
        expect(VatChecker.checkVatNum('HU13122605')).to.be.true;
        expect(VatChecker.checkVatNum('HU13245658')).to.be.true;
        expect(VatChecker.checkVatNum('HU13277279')).to.be.true;
        expect(VatChecker.checkVatNum('HU13460370')).to.be.true;
        expect(VatChecker.checkVatNum('HU13532774')).to.be.true;
        expect(VatChecker.checkVatNum('HU13597986')).to.be.true;
        expect(VatChecker.checkVatNum('HU13846077')).to.be.true;
        expect(VatChecker.checkVatNum('HU13949235')).to.be.true;
        expect(VatChecker.checkVatNum('HU14860955')).to.be.true;
        expect(VatChecker.checkVatNum('HU14915969')).to.be.true;
        expect(VatChecker.checkVatNum('HU15308744')).to.be.true;
        expect(VatChecker.checkVatNum('HU15329499')).to.be.true;
        expect(VatChecker.checkVatNum('HU15490012')).to.be.true;
        expect(VatChecker.checkVatNum('HU15598323')).to.be.true;
        expect(VatChecker.checkVatNum('HU17781279')).to.be.true;
        expect(VatChecker.checkVatNum('HU18173967')).to.be.true;
        expect(VatChecker.checkVatNum('HU18764325')).to.be.true;
        expect(VatChecker.checkVatNum('HU19002464')).to.be.true;
        expect(VatChecker.checkVatNum('HU19023229')).to.be.true;
        expect(VatChecker.checkVatNum('HU22919456')).to.be.true;
        expect(VatChecker.checkVatNum('HU23001363')).to.be.true;
        expect(VatChecker.checkVatNum('HU23157653')).to.be.true;
        expect(VatChecker.checkVatNum('HU23058176')).to.be.true;
        expect(VatChecker.checkVatNum('HU23143409')).to.be.true;
        expect(VatChecker.checkVatNum('HU23157653')).to.be.true;
        expect(VatChecker.checkVatNum('HU23474178')).to.be.true;
        expect(VatChecker.checkVatNum('HU63731758')).to.be.true;
        expect(VatChecker.checkVatNum('HU65730980')).to.be.true;
        expect(VatChecker.checkVatNum('HU65730981')).to.be.false;
        expect(VatChecker.checkVatNum('HU65731980')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});