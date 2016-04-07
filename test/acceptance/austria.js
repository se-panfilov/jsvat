var jsvat = require('../../dist/jsvat.js');
var austriaVat = require('./austria.vat.js');
var utils = require('../utils.js');

describe("Austria VAT.", function () {
  describe("Common checks.", function () {
    describe("Valid VAT.", function () {
      describe("Simple checks.", function () {
        describe("Regular valid VAT.", function () {
          utils.check(austriaVat.valid, "Is VAT valid", true);
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.check(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT with \'-\' valid", true);
        });

        describe("Valid VAT with space character.", function () {
          utils.check(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT with space valid", true);
        });
      });

      describe("Deep checks.", function () {
        describe("Regular valid VAT.", function () {
          utils.detailedCheck(austriaVat.valid, "Is VAT valid", true, 'austria');
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT valid", true, 'austria');
        });

        describe("Valid VAT with space character.", function () {
          utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT valid", true, 'austria');
        });
      });
    });

    describe("Invalid VAT.", function () {
      describe("Simple checks.", function () {

        describe("Regular VAT.", function () {
          utils.check(austriaVat.invalid, "Is VAT valid", false);
        });

        describe("Invalid VAT with \'-\' character.", function () {
          utils.check(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT with \'-\' valid", false);
        });

        describe("Invalid VAT with space character.", function () {
          utils.check(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT with space valid", false);
        });

      });

      describe("Deep checks.", function () {

        describe("Regular valid VAT.", function () {
          utils.detailedCheck(austriaVat.invalid, "Is VAT valid", false, 'austria');
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT valid", false, 'austria');
        });

        describe("Valid VAT with space character.", function () {
          utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT valid", false, 'austria');
        });

      });
    });

  });

  describe("Isolated VAT checks", function () {

    describe("Config include country VAT checks", function () {

      before(function () {
        jsvat.config = {austria: true};
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(austriaVat.valid, "Is VAT valid", true);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT with \'-\' valid", true);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT with space valid", true);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.valid, "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT valid", true, 'austria');
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(austriaVat.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.invalid, "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT valid", false, 'austria');
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });

    });

    describe("Config exclude country VAT checks", function () {

      before(function () {
        jsvat.config = {austria: false};
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(austriaVat.valid, "Is VAT valid", false);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT with space valid", false);
          });

          after(function () {
            jsvat.config = {};
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.valid, "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT valid", true, 'austria');
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(austriaVat.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.invalid, "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT valid", false, 'austria');
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });

    });

    describe("Config include other country VAT checks", function () {

      before(function () {
        jsvat.config = {sweden: false};
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(austriaVat.valid, "Is VAT valid", false);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT with space valid", false);
          });

          after(function () {
            jsvat.config = {};
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.valid, "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, '-'), "Is VAT valid", true, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.valid, ' '), "Is VAT valid", true, 'austria');
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(austriaVat.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(austriaVat.invalid, "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, '-'), "Is VAT valid", false, 'austria');
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(austriaVat.invalid, ' '), "Is VAT valid", false, 'austria');
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });
    });

  });

});
