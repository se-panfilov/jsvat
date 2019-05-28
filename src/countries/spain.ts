import { Country } from '../main';

export const spain: Country = {
  name: 'Spain',
  codes: ['ES', 'ESP', '724'],
  calcFn: function (vat: string): boolean {
    if (!this.rules.multipliers) return false;
    if (!this.rules.additional) return false;

    let i = 0;
    let total = 0;
    let temp;
    let expect;

    // National juridical entities
    if (this.rules.additional[0].test(vat)) {
      if (!Array.isArray(this.rules.multipliers)) return false;
      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * this.rules.multipliers[i];
        if (temp > 9)
          total += Math.floor(temp / 10) + temp % 10;
        else
          total += temp;
      }
      // Now calculate the check digit itself.
      total = 10 - total % 10;
      if (total === 10) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(8, 9);
      return total === expect;
    } else if (this.rules.additional[1].test(vat)) { // Juridical entities other than national ones
      if (!Array.isArray(this.rules.multipliers)) return false;
      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * this.rules.multipliers[i];
        if (temp > 9)
          total += Math.floor(temp / 10) + temp % 10;
        else
          total += temp;
      }

      // Now calculate the check digit itself.
      total = 10 - total % 10;
      total = Number(String.fromCharCode(total + 64));

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = Number(vat.slice(8, 9));
      return total === expect;
    } else if (this.rules.additional[2].test(vat)) { // Personal number (NIF) (starting with numeric of Y or Z)
      let tempNumber = vat;
      if (tempNumber.substring(0, 1) === 'Y') tempNumber = tempNumber.replace(/Y/, '1');
      if (tempNumber.substring(0, 1) === 'Z') tempNumber = tempNumber.replace(/Z/, '2');
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempNumber.substring(0, 8) % 23);
      return tempNumber.charAt(8) === expect;
    } else if (this.rules.additional[3].test(vat)) { // Personal number (NIF) (starting with K, L, M, or X)
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);
      return vat.charAt(8) === expect;
    } else return false;
  },
  rules: {
    multipliers: [2, 1, 2, 1, 2, 1, 2],
    regex: [
      /^(ES)([A-Z]\d{8})$/,
      /^(ES)([A-HN-SW]\d{7}[A-J])$/,
      /^(ES)([0-9YZ]\d{7}[A-Z])$/,
      /^(ES)([KLMX]\d{7}[A-Z])$/
    ],
    additional: [
      /^[A-H|J|U|V]\d{8}$/,
      /^[A-H|N-S|W]\d{7}[A-J]$/,
      /^[0-9|Y|Z]\d{7}[A-Z]$/,
      /^[K|L|M|X]\d{7}[A-Z]$/
    ]
  }
};
