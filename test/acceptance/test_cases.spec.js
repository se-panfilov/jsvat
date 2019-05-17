// import {jsvat} from '../../dist/jsvat.js'
// import {utils} from '../utils.js'
import { austria } from './countries_vat_lists/austria.vat.js'
import { belgium } from './countries_vat_lists/belgium.vat.js'
import { bulgaria } from './countries_vat_lists/bulgaria.vat.js'
import { croatia } from './countries_vat_lists/croatia.vat.js'
import { cyprus } from './countries_vat_lists/cyprus.vat.js'
// eslint-disable-next-line camelcase
import { czech_republic } from './countries_vat_lists/czech_republic.vat.js'
import { denmark } from './countries_vat_lists/denmark.vat.js'
import { estonia } from './countries_vat_lists/estonia.vat.js'
import { europe } from './countries_vat_lists/europe.vat.js'
import { finland } from './countries_vat_lists/finland.vat.js'
import { france } from './countries_vat_lists/france.vat.js'
import { germany } from './countries_vat_lists/germany.vat.js'
import { greece } from './countries_vat_lists/greece.vat.js'
import { hungary } from './countries_vat_lists/hungary.vat.js'
import { ireland } from './countries_vat_lists/ireland.vat.js'
import { italy } from './countries_vat_lists/italy.vat.js'
import { latvia } from './countries_vat_lists/latvia.vat.js'
import { lithuania } from './countries_vat_lists/lithuania.vat.js'
import { luxembourg } from './countries_vat_lists/luxembourg.vat.js'
import { malta } from './countries_vat_lists/malta.vat.js'
import { netherlands } from './countries_vat_lists/netherlands.vat.js'
import { norway } from './countries_vat_lists/norway.vat.js'
import { poland } from './countries_vat_lists/poland.vat.js'
import { portugal } from './countries_vat_lists/portugal.vat.js'
import { romania } from './countries_vat_lists/romania.vat.js'
import { russia } from './countries_vat_lists/russia.vat.js'
import { serbia } from './countries_vat_lists/serbia.vat.js'
import { slovakia } from './countries_vat_lists/slovakia.vat.js'
import { slovenia } from './countries_vat_lists/slovenia.vat.js'
import { spain } from './countries_vat_lists/spain.vat.js'
import { sweden } from './countries_vat_lists/sweden.vat.js'
import { switzerland } from './countries_vat_lists/switzerland.vat.js'
// eslint-disable-next-line camelcase
import { united_kingdom } from './countries_vat_lists/united_kingdom.vat.js'

const countries = {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czech_republic,
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
  slovakia,
  slovenia,
  spain,
  sweden,
  switzerland,
  united_kingdom
}

describe('asdasd', () => {
  it('should sadsad', () => {
    expect(austria.name).toBe('Austria')
  })
})

// for (const k in countries) {
//   const country = countries[k]
//   if (countries.hasOwnProperty(k)) {
//     const vatList = countries[k]
//     makeTests(vatList, country)
//   }
// }

// function makeTests(vatList, country) {
//   describe(country.name + ' VAT.', () => {
//     describe('Common checks.', () => {
//       describe('Valid VAT.', () => {
//
//         describe('Simple checks.', () => {
//           describe('Regular valid VAT.', () => {
//             utils.check(vatList.valid, 'Is VAT valid', true, country)
//           })
//
//           describe('Valid VAT with \'-\' character.', () => {
//             utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
//           })
//
//           describe('Valid VAT with space character.', () => {
//             utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
//           })
//         })
//       })
//
//       describe('Invalid VAT.', () => {
//
//         describe('Simple checks.', () => {
//
//           describe('Regular valid VAT.', () => {
//             utils.check(vatList.invalid, 'Is VAT valid', false, country)
//           })
//
//           describe('Valid VAT with \'-\' character.', () => {
//             utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
//           })
//
//           describe('Valid VAT with space character.', () => {
//             utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
//           })
//
//         })
//       })
//
//     })
//
//     describe('Isolated VAT checks.', () => {
//
//       describe('Allowed current country.', () => {
//
//         before(() => {
//           jsvat.allowed = []
//           jsvat.allowed.push(country.name)
//         })
//
//         describe('Valid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.valid, 'Is VAT valid', true, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
//             })
//
//           })
//         })
//
//         describe('Invalid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.invalid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         after(() => {
//           jsvat.allowed = []
//         })
//
//       })
//
//       describe('Allowed current country By:.', () => {
//
//         describe('By name.', () => {
//           before(() => {
//             jsvat.allowed = []
//             jsvat.allowed.push(country.name)
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', true, country)
//
//           after(() => {
//             jsvat.allowed = []
//           })
//         })
//
//         describe('By short code.', () => {
//           before(() => {
//             jsvat.allowed = []
//             jsvat.allowed.push(country.codes[0])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', true, country)
//
//
//           after(() => {
//             jsvat.allowed = []
//           })
//         })
//
//         describe('By long code.', () => {
//           before(() => {
//             jsvat.allowed = []
//             jsvat.allowed.push(country.codes[1])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', true, country)
//
//           after(() => {
//             jsvat.allowed = []
//           })
//         })
//
//         describe('By num code.', () => {
//           before(() => {
//             jsvat.allowed = []
//             jsvat.allowed.push(country.codes[2])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', true, country)
//
//           after(() => {
//             jsvat.allowed = []
//           })
//         })
//
//
//       })
//
//       describe('Blocked current country.', () => {
//
//         before(() => {
//           jsvat.blocked = []
//           jsvat.blocked.push(country.name)
//         })
//
//         describe('Valid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.valid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         describe('Invalid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.invalid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         after(() => {
//           jsvat.blocked = []
//         })
//
//       })
//
//       describe('Blocked blocked country By: .', () => {
//
//         describe('By name.', () => {
//
//           before(() => {
//             jsvat.blocked = []
//             jsvat.blocked.push(country.name)
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', false, country)
//
//           after(() => {
//             jsvat.blocked = []
//           })
//
//         })
//
//         describe('By short code.', () => {
//           before(() => {
//             jsvat.blocked = []
//             jsvat.blocked.push(country.codes[0])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', false, country)
//
//           after(() => {
//             jsvat.blocked = []
//           })
//         })
//
//         describe('By long code.', () => {
//           before(() => {
//             jsvat.blocked = []
//             jsvat.blocked.push(country.codes[1])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', false, country)
//
//           after(() => {
//             jsvat.blocked = []
//           })
//         })
//
//         describe('By num code.', () => {
//           before(() => {
//             jsvat.blocked = []
//             jsvat.blocked.push(country.codes[2])
//           })
//
//           utils.check(vatList.valid, 'Is VAT valid', false, country)
//
//           after(() => {
//             jsvat.blocked = []
//           })
//         })
//
//       })
//
//       describe('Allowed other countries.', () => {
//
//         before(() => {
//           let otherCountry = 'sweden'
//           jsvat.allowed = []
//           if (country.name === 'Sweden') {
//             otherCountry = 'austria'
//           }
//
//           jsvat.allowed.push(otherCountry)
//         })
//
//         describe('Valid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.valid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         describe('Invalid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.invalid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         after(() => {
//           jsvat.allowed = []
//         })
//       })
//
//       describe('Allowed multiple countries but not current.', () => {
//
//         before(() => {
//           const otherCountries = ['sweden', 'RU', '056']
//
//           jsvat.allowed = []
//
//           if (country.name === 'Sweden') otherCountries[0] = 'austria'
//           if (country.codes[0] === 'RU') otherCountries[1] = 'austria'
//           if (country.codes[2] === '056') otherCountries[2] = 'austria'
//
//           jsvat.allowed.push(otherCountries[0])
//           jsvat.allowed.push(otherCountries[1])
//           jsvat.allowed.push(otherCountries[2])
//         })
//
//         describe('Valid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.valid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         describe('Invalid VAT.', () => {
//
//           describe('Simple checks.', () => {
//
//             describe('Regular valid VAT.', () => {
//               utils.check(vatList.invalid, 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with \'-\' character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
//             })
//
//             describe('Valid VAT with space character.', () => {
//               utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
//             })
//
//           })
//         })
//
//         after(() => {
//           jsvat.allowed = []
//         })
//       })
//
//     })
//
//   })
// }
