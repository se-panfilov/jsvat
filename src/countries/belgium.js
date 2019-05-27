// @flow
import type { Country } from '../main'

export const belgium: Country = {
  name: 'Belgium',
  codes: ['BE', 'BEL', '056'],
  calcFn: function (vat: string) {
    if (vat.length === 9) {
      vat = '0' + vat
    }

    if (+vat.slice(1, 2) === 0) return false

    const check = (97 - +vat.slice(0, 8) % 97)
    return check === +vat.slice(8, 10)
  },
  rules: {
    regex: [/^(BE)(0?\d{9})$/]
  }
}
