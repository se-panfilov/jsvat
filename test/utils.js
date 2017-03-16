const expect = require('chai').expect
const jsvat = require('../dist/jsvat.js')
const argv = require('minimist')(process.argv.slice(2))

const noVerbose = "noverbose"

module.exports = {
  check (arr, msg, isTrue, countryName) {
    arr.forEach(function (item) {

      const testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test'

      return it(testMsg, () => {
        const result = jsvat.checkVAT(item)
        if (isTrue) {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).to.be.true
          console.log(result.country + ' - ' + countryName)
          expect(result.country).to.be.equal(countryName)
        } else {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''))
          expect(result.isValid).to.be.false
          expect(result.country).to.be.null
        }
      })
    })
  },
  addCharsToVals (arr, char) {
    return arr.map(function (item) {
      const val = item.split('')
      val.splice(3, 0, char)
      val.splice(7, 0, char)
      return val.join('')
    })
  }
}
