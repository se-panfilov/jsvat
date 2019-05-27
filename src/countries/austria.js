// @flow
import type { Country } from '../main'

export const austria: Country = {
  name: 'Austria',
  codes: ['AT', 'AUT', '040'],
  calcFn: function (vat: string) {
    let total = 0

    for (let i: number = 0; i < 7; i++) {
      let temp = Number(vat.charAt(i)) * this.rules.multipliers[i]

      if (temp > 9) {
        total += Math.floor(temp / 10) + temp % 10
      } else {
        total += temp
      }
    }

    total = 10 - (total + 4) % 10
    if (total === 10) total = 0

    return total === +vat.slice(7, 8)
  },
  rules: {
    multipliers: [1, 2, 1, 2, 1, 2, 1],
    regex: [/^(AT)U(\d{8})$/]
  }
}
