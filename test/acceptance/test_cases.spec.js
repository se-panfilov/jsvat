import {jsvat} from '../../dist/jsvat'
import {utils} from '../utils'
import { austria } from './countries_vat_lists/austria.vat'
import { belgium } from './countries_vat_lists/belgium.vat'
import { bulgaria } from './countries_vat_lists/bulgaria.vat'
import { croatia } from './countries_vat_lists/croatia.vat'
import { cyprus } from './countries_vat_lists/cyprus.vat'
import { czechRepublic } from './countries_vat_lists/czechRepublic.vat'
import { denmark } from './countries_vat_lists/denmark.vat'
import { estonia } from './countries_vat_lists/estonia.vat'
import { europe } from './countries_vat_lists/europe.vat'
import { finland } from './countries_vat_lists/finland.vat'
import { france } from './countries_vat_lists/france.vat'
import { germany } from './countries_vat_lists/germany.vat'
import { greece } from './countries_vat_lists/greece.vat'
import { hungary } from './countries_vat_lists/hungary.vat'
import { ireland } from './countries_vat_lists/ireland.vat'
import { italy } from './countries_vat_lists/italy.vat'
import { latvia } from './countries_vat_lists/latvia.vat'
import { lithuania } from './countries_vat_lists/lithuania.vat'
import { luxembourg } from './countries_vat_lists/luxembourg.vat'
import { malta } from './countries_vat_lists/malta.vat'
import { netherlands } from './countries_vat_lists/netherlands.vat'
import { norway } from './countries_vat_lists/norway.vat'
import { poland } from './countries_vat_lists/poland.vat'
import { portugal } from './countries_vat_lists/portugal.vat'
import { romania } from './countries_vat_lists/romania.vat'
import { russia } from './countries_vat_lists/russia.vat'
import { serbia } from './countries_vat_lists/serbia.vat'
import { slovakiaRepublic } from './countries_vat_lists/slovakiaRepublic.vat'
import { slovenia } from './countries_vat_lists/slovenia.vat'
import { spain } from './countries_vat_lists/spain.vat'
import { sweden } from './countries_vat_lists/sweden.vat'
import { switzerland } from './countries_vat_lists/switzerland.vat'
import { unitedKingdom } from './countries_vat_lists/unitedKingdom.vat'

const countries = {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czechRepublic,
  denmark,
  estonia,
  europe,
  finland,
  france,
  germany,
  greece,
  hungary,
  ireland,
  italy,
  latvia,
  lithuania,
  luxembourg,
  malta,
  netherlands,
  norway,
  poland,
  portugal,
  romania,
  russia,
  serbia,
  slovakiaRepublic,
  slovenia,
  spain,
  sweden,
  switzerland,
  unitedKingdom
}

for (const k in countries) {
  const country = countries[k]
  if (countries.hasOwnProperty(k)) {
    const vatList = countries[k]
    makeTests(vatList, country)
  }
}

function makeTests(vatList, country) {
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

    // describe('Isolated VAT checks.', () => {
    //
    //   describe('Allowed current country.', () => {
    //
    //     beforeEach(() => {
    //       jsvat.allowed = []
    //       jsvat.allowed.push(country.name)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     afterEach(() => {
    //       jsvat.allowed = []
    //     })
    //
    //   })
    //
    //   describe('Allowed current country By:.', () => {
    //
    //     describe('By name.', () => {
    //       beforeEach(() => {
    //         jsvat.allowed = []
    //         jsvat.allowed.push(country.name)
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', true, country)
    //
    //       afterEach(() => {
    //         jsvat.allowed = []
    //       })
    //     })
    //
    //     describe('By short code.', () => {
    //       beforeEach(() => {
    //         jsvat.allowed = []
    //         jsvat.allowed.push(country.codes[0])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', true, country)
    //
    //
    //       afterEach(() => {
    //         jsvat.allowed = []
    //       })
    //     })
    //
    //     describe('By long code.', () => {
    //       beforeEach(() => {
    //         jsvat.allowed = []
    //         jsvat.allowed.push(country.codes[1])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', true, country)
    //
    //       afterEach(() => {
    //         jsvat.allowed = []
    //       })
    //     })
    //
    //     describe('By num code.', () => {
    //       beforeEach(() => {
    //         jsvat.allowed = []
    //         jsvat.allowed.push(country.codes[2])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', true, country)
    //
    //       afterEach(() => {
    //         jsvat.allowed = []
    //       })
    //     })
    //
    //   })
    //
    //   describe('Blocked current country.', () => {
    //
    //     beforeEach(() => {
    //       jsvat.blocked = []
    //       jsvat.blocked.push(country.name)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     afterEach(() => {
    //       jsvat.blocked = []
    //     })
    //
    //   })
    //
    //   describe('Blocked blocked country By: .', () => {
    //
    //     describe('By name.', () => {
    //
    //       beforeEach(() => {
    //         jsvat.blocked = []
    //         jsvat.blocked.push(country.name)
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', false, country)
    //
    //       afterEach(() => {
    //         jsvat.blocked = []
    //       })
    //
    //     })
    //
    //     describe('By short code.', () => {
    //       beforeEach(() => {
    //         jsvat.blocked = []
    //         jsvat.blocked.push(country.codes[0])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', false, country)
    //
    //       afterEach(() => {
    //         jsvat.blocked = []
    //       })
    //     })
    //
    //     describe('By long code.', () => {
    //       beforeEach(() => {
    //         jsvat.blocked = []
    //         jsvat.blocked.push(country.codes[1])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', false, country)
    //
    //       afterEach(() => {
    //         jsvat.blocked = []
    //       })
    //     })
    //
    //     describe('By num code.', () => {
    //       beforeEach(() => {
    //         jsvat.blocked = []
    //         jsvat.blocked.push(country.codes[2])
    //       })
    //
    //       utils.check(vatList.valid, 'Is VAT valid', false, country)
    //
    //       afterEach(() => {
    //         jsvat.blocked = []
    //       })
    //     })
    //
    //   })
    //
    //   describe('Allowed other countries.', () => {
    //
    //     beforeEach(() => {
    //       let otherCountry = 'sweden'
    //       jsvat.allowed = []
    //       if (country.name === 'Sweden') {
    //         otherCountry = 'austria'
    //       }
    //
    //       jsvat.allowed.push(otherCountry)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     afterEach(() => {
    //       jsvat.allowed = []
    //     })
    //   })
    //
    //   describe('Allowed multiple countries but not current.', () => {
    //
    //     beforeEach(() => {
    //       const otherCountries = ['sweden', 'RU', '056']
    //
    //       jsvat.allowed = []
    //
    //       if (country.name === 'Sweden') otherCountries[0] = 'austria'
    //       if (country.codes[0] === 'RU') otherCountries[1] = 'austria'
    //       if (country.codes[2] === '056') otherCountries[2] = 'austria'
    //
    //       jsvat.allowed.push(otherCountries[0])
    //       jsvat.allowed.push(otherCountries[1])
    //       jsvat.allowed.push(otherCountries[2])
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     afterEach(() => {
    //       jsvat.allowed = []
    //     })
    //   })
    //
    // })

  })
}
