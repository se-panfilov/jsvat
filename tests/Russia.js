var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Russia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('RU0274051582')).to.be.true;
        expect(VatChecker.checkVatNum('RU2901081545')).to.be.true;
        expect(VatChecker.checkVatNum('RU3665069495')).to.be.true;
        expect(VatChecker.checkVatNum('RU5024051807')).to.be.true;
        expect(VatChecker.checkVatNum('RU5027187066')).to.be.true;
        expect(VatChecker.checkVatNum('RU5249116595')).to.be.true;
        expect(VatChecker.checkVatNum('RU5451110090')).to.be.true;
        expect(VatChecker.checkVatNum('RU7225004092')).to.be.true;
        expect(VatChecker.checkVatNum('RU7701369293')).to.be.true;
        expect(VatChecker.checkVatNum('RU7701370997')).to.be.true;
        expect(VatChecker.checkVatNum('RU7701996907')).to.be.true;
        expect(VatChecker.checkVatNum('RU7701998647')).to.be.true;
        expect(VatChecker.checkVatNum('RU7702070139')).to.be.true;
        expect(VatChecker.checkVatNum('RU7703618107')).to.be.true;
        expect(VatChecker.checkVatNum('RU7705182000')).to.be.true;
        expect(VatChecker.checkVatNum('RU7705205000')).to.be.true;
        expect(VatChecker.checkVatNum('RU7707083893')).to.be.true;
        expect(VatChecker.checkVatNum('RU7708704085')).to.be.true;
        expect(VatChecker.checkVatNum('RU7710030411')).to.be.true;
        expect(VatChecker.checkVatNum('RU7710401987')).to.be.true;
        expect(VatChecker.checkVatNum('RU7718249396')).to.be.true;
        expect(VatChecker.checkVatNum('RU7723008300')).to.be.true;
        expect(VatChecker.checkVatNum('RU7736050003')).to.be.true;
        expect(VatChecker.checkVatNum('RU7744000398')).to.be.true;
        expect(VatChecker.checkVatNum('RU7744001497')).to.be.true;
        expect(VatChecker.checkVatNum('RU7750004009')).to.be.true;
        expect(VatChecker.checkVatNum('RU9909099353')).to.be.true;
        expect(VatChecker.checkVatNum('RU9909161308')).to.be.true;
        expect(VatChecker.checkVatNum('RU9909235581')).to.be.true;
        expect(VatChecker.checkVatNum('RU9909310782')).to.be.true;
        expect(VatChecker.checkVatNum('RU5027187067')).to.be.false;
        expect(VatChecker.checkVatNum('RU524911659')).to.be.false;
        expect(VatChecker.checkVatNum('RU77013692931')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('RU7 7019 96907')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('RU7701-99-6907')).to.be.true;
    });
});
