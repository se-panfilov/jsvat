'use strict'

const jsvat = require('../../dist/jsvat.js')
const utils = require('../utils.js')

const countries = {}
countries.austria = require('./countries_vat_lists/austria.vat.js')
countries.belgium = require('./countries_vat_lists/belgium.vat.js')
countries.bulgaria = require('./countries_vat_lists/bulgaria.vat.js')
countries.croatia = require('./countries_vat_lists/croatia.vat.js')
countries.cyprus = require('./countries_vat_lists/cyprus.vat.js')
countries.czech_republic = require('./countries_vat_lists/czech_republic.vat.js')
countries.denmark = require('./countries_vat_lists/denmark.vat.js')
countries.estonia = require('./countries_vat_lists/estonia.vat.js')
countries.europe = require('./countries_vat_lists/europe.vat.js')
countries.finland = require('./countries_vat_lists/finland.vat.js')
countries.france = require('./countries_vat_lists/france.vat.js')
countries.germany = require('./countries_vat_lists/germany.vat.js')
countries.greece = require('./countries_vat_lists/greece.vat.js')
countries.hungary = require('./countries_vat_lists/hungary.vat.js')
countries.ireland = require('./countries_vat_lists/ireland.vat.js')
countries.italy = require('./countries_vat_lists/italy.vat.js')
countries.latvia = require('./countries_vat_lists/latvia.vat.js')
countries.lithuania = require('./countries_vat_lists/lithuania.vat.js')
countries.luxembourg = require('./countries_vat_lists/luxembourg.vat.js')
countries.malta = require('./countries_vat_lists/malta.vat.js')
countries.netherlands = require('./countries_vat_lists/netherlands.vat.js')
countries.norway = require('./countries_vat_lists/norway.vat.js')
countries.poland = require('./countries_vat_lists/poland.vat.js')
countries.portugal = require('./countries_vat_lists/portugal.vat.js')
countries.romania = require('./countries_vat_lists/romania.vat.js')
countries.russia = require('./countries_vat_lists/russia.vat.js')
countries.serbia = require('./countries_vat_lists/serbia.vat.js')
countries.slovakia_republic = require('./countries_vat_lists/slovakia.vat.js')
countries.slovenia = require('./countries_vat_lists/slovenia.vat.js')
countries.spain = require('./countries_vat_lists/spain.vat.js')
countries.sweden = require('./countries_vat_lists/sweden.vat.js')
countries.switzerland = require('./countries_vat_lists/switzerland.vat.js')
countries.united_kingdom = require('./countries_vat_lists/united_kingdom.vat.js')

for (const k in countries) {
  const country = countries[k]
  if (countries.hasOwnProperty(k)) {
    const vatList = countries[k]
    makeTests(vatList, country)
  }
}

function makeTests (vatList, country) {
  describe(country.name + ' VAT.', () => {
    describe('Common checks.', () => {
      describe('Valid VAT.', () => {

        describe('Simple checks.', () => {
          describe('Regular valid VAT.', () => {
            utils.check(vatList.valid, 'Is VAT valid', true, country)
          })

          describe('Valid VAT with \'-\' character.', () => {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
          })

          describe('Valid VAT with space character.', () => {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
          })
        })
      })

      describe('Invalid VAT.', () => {

        describe('Simple checks.', () => {

          describe('Regular valid VAT.', () => {
            utils.check(vatList.invalid, 'Is VAT valid', false, country)
          })

          describe('Valid VAT with \'-\' character.', () => {
            utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
          })

          describe('Valid VAT with space character.', () => {
            utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
          })

        })
      })

    })

    describe('Isolated VAT checks.', () => {

      describe('Allowed current country.', () => {

        before(() => {
          jsvat.allowed = []
          jsvat.allowed.push(country.name)
        })

        describe('Valid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.valid, 'Is VAT valid', true, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
            })

          })
        })

        describe('Invalid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.invalid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        after(() => {
          jsvat.allowed = []
        })

      })

      describe('Allowed current country By:.', () => {

        describe('By name.', () => {
          before(() => {
            jsvat.allowed = []
            jsvat.allowed.push(country.name)
          })

          utils.check(vatList.valid, 'Is VAT valid', true, country)

          after(() => {
            jsvat.allowed = []
          })
        })

        describe('By short code.', () => {
          before(() => {
            jsvat.allowed = []
            jsvat.allowed.push(country.codes[0])
          })

          utils.check(vatList.valid, 'Is VAT valid', true, country)


          after(() => {
            jsvat.allowed = []
          })
        })

        describe('By long code.', () => {
          before(() => {
            jsvat.allowed = []
            jsvat.allowed.push(country.codes[1])
          })

          utils.check(vatList.valid, 'Is VAT valid', true, country)

          after(() => {
            jsvat.allowed = []
          })
        })

        describe('By num code.', () => {
          before(() => {
            jsvat.allowed = []
            jsvat.allowed.push(country.codes[2])
          })

          utils.check(vatList.valid, 'Is VAT valid', true, country)

          after(() => {
            jsvat.allowed = []
          })
        })


      })

      describe('Blocked current country.', () => {

        before(() => {
          jsvat.blocked = []
          jsvat.blocked.push(country.name)
        })

        describe('Valid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.valid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        describe('Invalid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.invalid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        after(() => {
          jsvat.blocked = []
        })

      })

      describe('Blocked blocked country By: .', () => {

        describe('By name.', () => {

          before(() => {
            jsvat.blocked = []
            jsvat.blocked.push(country.name)
          })

          utils.check(vatList.valid, 'Is VAT valid', false, country)

          after(() => {
            jsvat.blocked = []
          })

        })

        describe('By short code.', () => {
          before(() => {
            jsvat.blocked = []
            jsvat.blocked.push(country.codes[0])
          })

          utils.check(vatList.valid, 'Is VAT valid', false, country)

          after(() => {
            jsvat.blocked = []
          })
        })

        describe('By long code.', () => {
          before(() => {
            jsvat.blocked = []
            jsvat.blocked.push(country.codes[1])
          })

          utils.check(vatList.valid, 'Is VAT valid', false, country)

          after(() => {
            jsvat.blocked = []
          })
        })

        describe('By num code.', () => {
          before(() => {
            jsvat.blocked = []
            jsvat.blocked.push(country.codes[2])
          })

          utils.check(vatList.valid, 'Is VAT valid', false, country)

          after(() => {
            jsvat.blocked = []
          })
        })

      })

      describe('Allowed other countries.', () => {

        before(() => {
          let otherCountry = 'sweden'
          jsvat.allowed = []
          if (country.name === 'Sweden') {
            otherCountry = 'austria'
          }

          jsvat.allowed.push(otherCountry)
        })

        describe('Valid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.valid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        describe('Invalid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.invalid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        after(() => {
          jsvat.allowed = []
        })
      })

      describe('Allowed multiple countries but not current.', () => {

        before(() => {
          const otherCountries = ['sweden', 'RU', '056']

          jsvat.allowed = []

          if (country.name === 'Sweden') otherCountries[0] = 'austria'
          if (country.codes[0] === 'RU') otherCountries[1] = 'austria'
          if (country.codes[2] === '056') otherCountries[2] = 'austria'

          jsvat.allowed.push(otherCountries[0])
          jsvat.allowed.push(otherCountries[1])
          jsvat.allowed.push(otherCountries[2])
        })

        describe('Valid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.valid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        describe('Invalid VAT.', () => {

          describe('Simple checks.', () => {

            describe('Regular valid VAT.', () => {
              utils.check(vatList.invalid, 'Is VAT valid', false, country)
            })

            describe('Valid VAT with \'-\' character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
            })

            describe('Valid VAT with space character.', () => {
              utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
            })

          })
        })

        after(() => {
          jsvat.allowed = []
        })
      })

    })

  })
}
