var jsvat = require('../../dist/jsvat.js');
var vatList = require('./countries_vat_lists/austria.vat.js');
var utils = require('../utils.js');

var countryName = 'austria';

describe("Austria VAT.", function () {
  describe("Common checks.", function () {
    describe("Valid VAT.", function () {
      describe("Simple checks.", function () {
        describe("Regular valid VAT.", function () {
          utils.check(vatList.valid, "Is VAT valid", true);
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.check(utils.addCharsToVals(vatList.valid, '-'), "Is VAT with \'-\' valid", true);
        });

        describe("Valid VAT with space character.", function () {
          utils.check(utils.addCharsToVals(vatList.valid, ' '), "Is VAT with space valid", true);
        });
      });

      describe("Deep checks.", function () {
        describe("Regular valid VAT.", function () {
          utils.detailedCheck(vatList.valid, "Is VAT valid", true, countryName);
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.detailedCheck(utils.addCharsToVals(vatList.valid, '-'), "Is VAT valid", true, countryName);
        });

        describe("Valid VAT with space character.", function () {
          utils.detailedCheck(utils.addCharsToVals(vatList.valid, ' '), "Is VAT valid", true, countryName);
        });
      });
    });

    describe("Invalid VAT.", function () {
      describe("Simple checks.", function () {

        describe("Regular VAT.", function () {
          utils.check(vatList.invalid, "Is VAT valid", false);
        });

        describe("Invalid VAT with \'-\' character.", function () {
          utils.check(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT with \'-\' valid", false);
        });

        describe("Invalid VAT with space character.", function () {
          utils.check(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT with space valid", false);
        });

      });

      describe("Deep checks.", function () {

        describe("Regular valid VAT.", function () {
          utils.detailedCheck(vatList.invalid, "Is VAT valid", false, countryName);
        });

        describe("Valid VAT with \'-\' character.", function () {
          utils.detailedCheck(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT valid", false, countryName);
        });

        describe("Valid VAT with space character.", function () {
          utils.detailedCheck(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT valid", false, countryName);
        });

      });
    });

  });

  describe("Isolated VAT checks", function () {

    describe("Config include current country.", function () {

      before(function () {
        jsvat.config = {};
        jsvat.config[countryName] = true;
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(vatList.valid, "Is VAT valid", true);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), "Is VAT with \'-\' valid", true);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), "Is VAT with space valid", true);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.valid, "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, '-'), "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, ' '), "Is VAT valid", true, countryName);
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(vatList.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.invalid, "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT valid", false, countryName);
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });

    });

    describe("Config exclude current country.", function () {

      before(function () {
        jsvat.config = {};
        jsvat.config[countryName] = false;
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(vatList.valid, "Is VAT valid", false);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), "Is VAT with space valid", false);
          });

          after(function () {
            jsvat.config = {};
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.valid, "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, '-'), "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, ' '), "Is VAT valid", true, countryName);
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(vatList.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.invalid, "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT valid", false, countryName);
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });

    });

    describe("Config include other country.", function () {

      before(function () {
        var otherCountry = 'sweden';
        jsvat.config = {};
        if (countryName === 'sweden') {
          otherCountry = 'austria';
        }

        jsvat.config[otherCountry] = true;
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(vatList.valid, "Is VAT valid", false);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), "Is VAT with space valid", false);
          });

          after(function () {
            jsvat.config = {};
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.valid, "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, '-'), "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, ' '), "Is VAT valid", true, countryName);
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(vatList.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.invalid, "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT valid", false, countryName);
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });
    });

    describe("Config include multiple countries VAT checks.", function () {

      before(function () {
        var otherCountries = ['sweden', 'russia', 'united_kingdom'];

        jsvat.config = {};

        if (countryName === 'sweden') otherCountries[0] = 'austria';
        if (countryName === 'russia') otherCountries[1] = 'austria';
        if (countryName === 'united_kingdom') otherCountries[2] = 'austria';

        jsvat.config[otherCountries[0]] = true;
        jsvat.config[otherCountries[1]] = false;
        jsvat.config[otherCountries[2]] = true;
      });

      describe("Valid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular valid VAT.", function () {
            utils.check(vatList.valid, "Is VAT valid", false);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Valid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), "Is VAT with space valid", false);
          });

          after(function () {
            jsvat.config = {};
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.valid, "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, '-'), "Is VAT valid", true, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.valid, ' '), "Is VAT valid", true, countryName);
          });

        });
      });

      describe("Invalid VAT.", function () {
        describe("Simple checks.", function () {
          describe("Regular VAT.", function () {
            utils.check(vatList.invalid, "Is VAT valid", false);
          });

          describe("Invalid VAT with \'-\' character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT with \'-\' valid", false);
          });

          describe("Invalid VAT with space character.", function () {
            utils.check(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT with space valid", false);
          });
        });

        describe("Deep checks.", function () {

          describe("Regular valid VAT.", function () {
            utils.detailedCheck(vatList.invalid, "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with \'-\' character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, '-'), "Is VAT valid", false, countryName);
          });

          describe("Valid VAT with space character.", function () {
            utils.detailedCheck(utils.addCharsToVals(vatList.invalid, ' '), "Is VAT valid", false, countryName);
          });

        });
      });

      after(function () {
        jsvat.config = {};
      });
    });

  });

});
