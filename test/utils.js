import { checkVAT } from '../dist/jsvat.js'

const argv = require('minimist')(process.argv.slice(2))

const noVerbose = 'noverbose'

export const utils = {
  check(arr, msg, isTrue, country) {
    arr.forEach(function (item) {

      const testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test'

      return it(testMsg, () => {
        const result = checkVAT(item)

        if (isTrue) {
          expect(result.value).toBe(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).toBe(true)
          expect(result.country.name).toBe(country.name)
          expect(result.country.isoCode.short).toBe(country.codes[0])
          expect(result.country.isoCode.long).toBe(country.codes[1])
          expect(result.country.isoCode.numeric).toBe(country.codes[2])
        } else {
          expect(result.value).toBe(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).toBe(false)
          // expect(result.country).to.be.undefined
        }
      })
    })
  },
  addCharsToVals(arr, char) {
    return arr.map(item => {
      const val = item.split('')
      val.splice(3, 0, char)
      val.splice(7, 0, char)
      return val.join('')
    })
  }
}
