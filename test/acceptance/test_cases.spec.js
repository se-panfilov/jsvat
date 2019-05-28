import { utils } from '../utils'
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

  })
}
