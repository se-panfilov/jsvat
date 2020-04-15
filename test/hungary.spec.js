import { hungary } from '../index'
import { codes, invalid, name, valid } from './countries_vat_lists/hungary.vat'
import { addCharsToString, checkInvalidVat, checkValidVat } from './utils'

describe('Hungary', () => {

  it('should return true result for valid VATs', () => {
    valid.forEach(vat => checkValidVat(vat, [hungary], codes, name))
  })

  it('should return true result for valid VATs with extra dash characters', () => {
    valid
      .map(vat => addCharsToString(vat, '-'))
      .forEach(vat => checkValidVat(vat, [hungary], codes, name))
  })

  it('should return true result for valid VATs with extra space characters', () => {
    valid
      .map(vat => addCharsToString(vat, ' '))
      .forEach(vat => checkValidVat(vat, [hungary], codes, name))
  })

  it('should return false result for invalid VATs', () => {
    invalid.forEach(vat => checkInvalidVat(vat, [hungary]))
  })

})
