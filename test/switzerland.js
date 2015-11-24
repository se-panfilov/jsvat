var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Switzerland VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('CHE100416306MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE101090265MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE101698805MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE101770851MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE102534916MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE102628670MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE102646900MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE102805222MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE103051537MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE104309655MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE104528536MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE104827884MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105121077MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105124868MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105381951MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE107737562MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105789849MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105835768MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105873496MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE105898444MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE106480461MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE106847076MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE107811419MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE107984669MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE108017588MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE108019245MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE108020917MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE108458018MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE108672988MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE109852725MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE109877518MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE110171891MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE110257191MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE112142015MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE112256297MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE112487804MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE112591732MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE113816425MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE114498799MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE114546487MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE114932413MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE115197811MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE115288187MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE115772649MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116032762MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116199020MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116238111MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116268856MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116272898MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116276850MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116284625MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116303292MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116303553MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116304475MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE116320362MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE158229508MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE184633358MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE255263366MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE284156502MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE350423893MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE381569736MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE408983125MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE424414541MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE432495116MWST')).to.be.true;
        expect(VatChecker.checkVAT('CHE432825998MWST')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('CHE-432.825.99-MWST')).to.be.false;
        expect(VatChecker.checkVAT('CHE-432.825.9980-MWST')).to.be.false;
        expect(VatChecker.checkVAT('CH-432.825.999-MWST')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('CHE1 1528 8187 MWST')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('CHE115-2881-87MWST')).to.be.true;
    });
});