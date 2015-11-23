var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Russia VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('RU0274051582')).to.be.true;
        expect(VatChecker.checkVAT('RU2901081545')).to.be.true;
        expect(VatChecker.checkVAT('RU3665069495')).to.be.true;
        expect(VatChecker.checkVAT('RU5024051807')).to.be.true;
        expect(VatChecker.checkVAT('RU5027187066')).to.be.true;
        expect(VatChecker.checkVAT('RU5249116595')).to.be.true;
        expect(VatChecker.checkVAT('RU5451110090')).to.be.true;
        expect(VatChecker.checkVAT('RU7225004092')).to.be.true;
        expect(VatChecker.checkVAT('RU7701369293')).to.be.true;
        expect(VatChecker.checkVAT('RU7701370997')).to.be.true;
        expect(VatChecker.checkVAT('RU7701996907')).to.be.true;
        expect(VatChecker.checkVAT('RU7701998647')).to.be.true;
        expect(VatChecker.checkVAT('RU7702070139')).to.be.true;
        expect(VatChecker.checkVAT('RU7703618107')).to.be.true;
        expect(VatChecker.checkVAT('RU7705182000')).to.be.true;
        expect(VatChecker.checkVAT('RU7705205000')).to.be.true;
        expect(VatChecker.checkVAT('RU7707083893')).to.be.true;
        expect(VatChecker.checkVAT('RU7708704085')).to.be.true;
        expect(VatChecker.checkVAT('RU7710030411')).to.be.true;
        expect(VatChecker.checkVAT('RU7710401987')).to.be.true;
        expect(VatChecker.checkVAT('RU7718249396')).to.be.true;
        expect(VatChecker.checkVAT('RU7723008300')).to.be.true;
        expect(VatChecker.checkVAT('RU7736050003')).to.be.true;
        expect(VatChecker.checkVAT('RU7744000398')).to.be.true;
        expect(VatChecker.checkVAT('RU7744001497')).to.be.true;
        expect(VatChecker.checkVAT('RU7750004009')).to.be.true;
        expect(VatChecker.checkVAT('RU9909099353')).to.be.true;
        expect(VatChecker.checkVAT('RU9909161308')).to.be.true;
        expect(VatChecker.checkVAT('RU9909235581')).to.be.true;
        expect(VatChecker.checkVAT('RU9909310782')).to.be.true;
        expect(VatChecker.checkVAT('RU5027187067')).to.be.false;
        expect(VatChecker.checkVAT('RU524911659')).to.be.false;
        expect(VatChecker.checkVAT('RU77013692931')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('RU7 7019 96907')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('RU7701-99-6907')).to.be.true;
    });
});
