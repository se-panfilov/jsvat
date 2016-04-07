"use strict";

var jsvat = require('../../dist/jsvat.js');
var utils = require('../utils.js');

var countries = {};
countries.austria = require('./countries_vat_lists/austria.vat.js');
countries.belgium = require('./countries_vat_lists/belgium.vat.js');
countries.bulgaria = require('./countries_vat_lists/bulgaria.vat.js');
countries.croatia = require('./countries_vat_lists/croatia.vat.js');
countries.cyprus = require('./countries_vat_lists/cyprus.vat.js');
countries.czech_republic = require('./countries_vat_lists/czech_republic.vat.js');
countries.denmark = require('./countries_vat_lists/denmark.vat.js');
countries.estonia = require('./countries_vat_lists/estonia.vat.js');
countries.eu_type = require('./countries_vat_lists/eu_type.vat.js');
countries.finland = require('./countries_vat_lists/finland.vat.js');
countries.france = require('./countries_vat_lists/france.vat.js');
countries.germany = require('./countries_vat_lists/germany.vat.js');
countries.greece = require('./countries_vat_lists/greece.vat.js');
countries.hungary = require('./countries_vat_lists/hungary.vat.js');
countries.ireland = require('./countries_vat_lists/ireland.vat.js');
countries.italy = require('./countries_vat_lists/italy.vat.js');
countries.latvia = require('./countries_vat_lists/latvia.vat.js');
countries.lithunia = require('./countries_vat_lists/lithunia.vat.js');
countries.luxembourg = require('./countries_vat_lists/luxembourg.vat.js');
countries.malta = require('./countries_vat_lists/malta.vat.js');
countries.netherlands = require('./countries_vat_lists/netherlands.vat.js');
countries.norway_not_eu = require('./countries_vat_lists/norway_not_eu.vat.js');
countries.poland = require('./countries_vat_lists/poland.vat.js');
countries.portugal = require('./countries_vat_lists/portugal.vat.js');
countries.romania = require('./countries_vat_lists/romania.vat.js');
countries.russia = require('./countries_vat_lists/russia.vat.js');
countries.serbia = require('./countries_vat_lists/serbia.vat.js');
countries.slovakia = require('./countries_vat_lists/slovakia.vat.js');
countries.slovenia = require('./countries_vat_lists/slovenia.vat.js');
countries.spain = require('./countries_vat_lists/spain.vat.js');
countries.sweden = require('./countries_vat_lists/sweden.vat.js');
countries.switzerland = require('./countries_vat_lists/switzerland.vat.js');
countries.united_kingdom = require('./countries_vat_lists/united_kingdom.vat.js');


for (var countryName in countries) {
  if (countries.hasOwnProperty(countryName)) {
    var vatList = countries[countryName];
    makeTests(vatList, countryName)
  }
}

function makeTests(vatList, countryName) {
  describe(countryName + " VAT.", function () {
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
}