var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Hungary VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('HU10672101')).to.be.true;
        expect(jsvat.checkVAT('HU10724318')).to.be.true;
        expect(jsvat.checkVAT('HU10747759')).to.be.true;
        expect(jsvat.checkVAT('HU10766172')).to.be.true;
        expect(jsvat.checkVAT('HU10875153')).to.be.true;
        expect(jsvat.checkVAT('HU10891748')).to.be.true;
        expect(jsvat.checkVAT('HU11125248')).to.be.true;
        expect(jsvat.checkVAT('HU11162973')).to.be.true;
        expect(jsvat.checkVAT('HU11342261')).to.be.true;
        expect(jsvat.checkVAT('HU11377304')).to.be.true;
        expect(jsvat.checkVAT('HU11457695')).to.be.true;
        expect(jsvat.checkVAT('HU11683582')).to.be.true;
        expect(jsvat.checkVAT('HU11879318')).to.be.true;
        expect(jsvat.checkVAT('HU12082348')).to.be.true;
        expect(jsvat.checkVAT('HU12194339')).to.be.true;
        expect(jsvat.checkVAT('HU12476365')).to.be.true;
        expect(jsvat.checkVAT('HU12509403')).to.be.true;
        expect(jsvat.checkVAT('HU12618398')).to.be.true;
        expect(jsvat.checkVAT('HU12723650')).to.be.true;
        expect(jsvat.checkVAT('HU12783166')).to.be.true;
        expect(jsvat.checkVAT('HU12804825')).to.be.true;
        expect(jsvat.checkVAT('HU12840937')).to.be.true;
        expect(jsvat.checkVAT('HU13122605')).to.be.true;
        expect(jsvat.checkVAT('HU13245658')).to.be.true;
        expect(jsvat.checkVAT('HU13277279')).to.be.true;
        expect(jsvat.checkVAT('HU13460370')).to.be.true;
        expect(jsvat.checkVAT('HU13532774')).to.be.true;
        expect(jsvat.checkVAT('HU13597986')).to.be.true;
        expect(jsvat.checkVAT('HU13846077')).to.be.true;
        expect(jsvat.checkVAT('HU13949235')).to.be.true;
        expect(jsvat.checkVAT('HU14860955')).to.be.true;
        expect(jsvat.checkVAT('HU14915969')).to.be.true;
        expect(jsvat.checkVAT('HU15308744')).to.be.true;
        expect(jsvat.checkVAT('HU15329499')).to.be.true;
        expect(jsvat.checkVAT('HU15490012')).to.be.true;
        expect(jsvat.checkVAT('HU15598323')).to.be.true;
        expect(jsvat.checkVAT('HU17781279')).to.be.true;
        expect(jsvat.checkVAT('HU18173967')).to.be.true;
        expect(jsvat.checkVAT('HU18764325')).to.be.true;
        expect(jsvat.checkVAT('HU19002464')).to.be.true;
        expect(jsvat.checkVAT('HU19023229')).to.be.true;
        expect(jsvat.checkVAT('HU22919456')).to.be.true;
        expect(jsvat.checkVAT('HU23001363')).to.be.true;
        expect(jsvat.checkVAT('HU23157653')).to.be.true;
        expect(jsvat.checkVAT('HU23058176')).to.be.true;
        expect(jsvat.checkVAT('HU23143409')).to.be.true;
        expect(jsvat.checkVAT('HU23157653')).to.be.true;
        expect(jsvat.checkVAT('HU23474178')).to.be.true;
        expect(jsvat.checkVAT('HU63731758')).to.be.true;
        expect(jsvat.checkVAT('HU65730980')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('HU65730981')).to.be.false;
        expect(jsvat.checkVAT('HU65731980')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('HU1 18793 18')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('HU11-879-318')).to.be.true;
    });
});