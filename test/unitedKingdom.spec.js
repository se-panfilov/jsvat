import { unitedKingdom } from '../index'
import { codes, invalid, name, valid } from './countries_vat_lists/unitedKingdom.vat'
import { addCharsToString, checkInValidVat, checkValidVat } from './utils'

describe('United Kingdom', () => {

  it('should return true result for valid VATs', () => {
    valid.forEach(vat => checkValidVat(vat, [unitedKingdom], codes, name))
  })

  it('should return true result for valid VATs with extra dash characters', () => {
    valid
      .map(vat => addCharsToString(vat, '-'))
      .forEach(vat => checkValidVat(vat, [unitedKingdom], codes, name))
  })

  it('should return true result for valid VATs with extra space characters', () => {
    valid
      .map(vat => addCharsToString(vat, ' '))
      .forEach(vat => checkValidVat(vat, [unitedKingdom], codes, name))
  })

  it('should return false result for invalid VATs', () => {
    invalid.forEach(vat => checkInValidVat(vat, [unitedKingdom]))
  })

})
