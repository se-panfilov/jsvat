const expect = require('chai').expect
const jsvat = require('../dist/jsvat.js')
const argv = require('minimist')(process.argv.slice(2))

const noVerbose = "noverbose"

module.exports = {
  check (arr, msg, isTrue, country) {
    arr.forEach(function (item) {

      const testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test'

      return it(testMsg, () => {
        const result = jsvat.checkVAT(item)
        // console.info(111)
        // console.info(result)
        // console.info(222)
        if (isTrue) {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).to.be.true
          expect(result.country.name).to.be.equal(country.name)
          expect(result.country.isoCode.short).to.be.equal(country.codes[0])
          expect(result.country.isoCode.long).to.be.equal(country.codes[1])
          expect(result.country.isoCode.numeric).to.be.equal(country.codes[2])
        } else {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).to.be.false
          // expect(result.country).to.be.undefined
        }
      })
    })
  },
  addCharsToVals (arr, char) {
    return arr.map(item => {
      const val = item.split('')
      val.splice(3, 0, char)
      val.splice(7, 0, char)
      return val.join('')
    })
  }
}
