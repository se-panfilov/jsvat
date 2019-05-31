[![Codacy Badge](https://api.codacy.com/project/badge/grade/874e7dce623149e18807bdc0a02671c2)](https://www.codacy.com/app/se-panfilov/jsvat)
[![Code Climate](https://codeclimate.com/github/se-panfilov/jsvat/badges/gpa.svg)](https://codeclimate.com/github/se-panfilov/jsvat)
[![Build Status](https://travis-ci.org/se-panfilov/jsvat.svg?branch=master)](https://travis-ci.org/se-panfilov/jsvat)
[![npm version](https://badge.fury.io/js/jsvat.svg)](http://badge.fury.io/js/jsvat)
[![devDependency Status](https://david-dm.org/se-panfilov/jsvat/dev-status.svg)](https://david-dm.org/se-panfilov/jsvat#info=devDependencies)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/se-panfilov/jsvat/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/jsvat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jsvat/)
[![Package Quality](http://npm.packagequality.com/badge/jsvat.png)](http://packagequality.com/#?package=jsvat)

jsvat
-------

[[Demo and Examples]][2]

Check the validity of the format of an EU VAT number. No dependencies.

What is it?
--------

Small library to check validity VAT numbers (European + some others counties). ([learn more][1] about VAT)

- no dependencies;
- no http calls;
- 2-step checks: math + regexp;
- three-shakeable;
- extendable;
- dynamically add/remove countries with which yu want to check the VAT;
- written with `typescript`;

Installation
----------

Installation:

  `npm i jsvat --save` or `yarn add jsvat`

For legacy versions (below v2.0.0) also possible: Bower: `bower i jsvat --save`

Getting Started
----------

  ```javascript
  import {checkVAT, belgium, austria} from 'jsvat'; 
  
  checkVAT('BG131134023', [belgium]); // true: accept only Belgium VATs
  checkVAT('BG131134023', [belgium, austria]); // true: accept only Belgium or Austria VATs 
  checkVAT('BG131134023', [austria]); // false: accept only Austria VATs
  ```

Return value
---------
 
`checkVAT()` returns a `Result` Object:

```typescript

export interface VatCheckResult {
    value?: string; // 'BG131134023': your VAT without extra characters (like '-', spaces, etc)
    isValid: boolean; // main result - is VAT correct against provided countries or not
    country?: { // VAT's couuntry (null if not found)
        name: string; // ISO country name of VAT
        isoCode: { // Country ISO codes
            short: string;
            long: string;
            numeric: string;
        };
    };
}
```

List of supported Countries:
---------

 - Austria
 - Belgium
 - Bulgaria
 - Switzerland
 - Cyprus
 - Czech Republic
 - Germany
 - Denmark
 - Greece
 - Spain
 - Europe
 - Estonia
 - Finland
 - France
 - United Kingdom
 - Croatia
 - Hungary
 - Ireland
 - Italy
 - Latvia
 - Lithuania
 - Luxembourg
 - Malta
 - Netherlands
 - Norway
 - Poland
 - Portugal
 - Romania
 - Russia Federation
 - Serbia
 - Slovenia
 - Slovakia republic
 - Sweden

Extend countries list - add your own country:
----------

You can add your own country.
In general `Country` should implement following structure:

```typescript
interface Country {
    name: string;
    codes: ReadonlyArray<string>;
    calcFn: (vat: string) => boolean;
    rules: {
       regex: ReadonlyArray<RegExp>;
   };
}
```
Example:

```javascript
import {checkVAT} from 'jsvat';

export const wonderland = {
  name: 'Wonderland',
  codes: ['WD', 'WDR', '999'], // This codes should follow ISO standards (short, long and numeric), but it's your own business
  calcFn: (vat) => {
    return vat.length === 10;
  },
  rules: {
    regex: [/^(WD)(\d{8})$/]
  }
};

checkVAT('WD12345678', [wonderland]); // true

```

How jsvat checks validity?
---------

There is 2-step check:

1. Compare with list of Regexps;

  For example regexp for austria is `/^(AT)U(\d{8})$/`.

 Looks like `ATU99999999` is valid (it's satisfy the regexp), but actually it's should be invalid.

2. Some magic mathematical counting;

 Here we make some mathematical calculation (different for each country).
 After that we may be sure that `ATU99999999`and for example `ATV66889218` isn't valid, but `ATU12011204` is valid.

NOTE:
VAT numbers of some countries should ends up with special characters. Like '01' for Sweden or "L" for Cyprus.
If 100% real VAT doesn't fit, try to add proper appendix.


Browsers Supports
---------

Support only of evergreen browsers.

Legacy versions (below v2.0.0) supports all browsers down to IE9 (including IE9).

LICENSE
-------

MIT: [https://github.com/se-panfilov/jsvat/blob/master/LICENSE][3]

 [1]: https://en.wikipedia.org/wiki/VAT_identification_number
 [2]: https://se-panfilov.github.io/jsvat
 [3]: https://github.com/se-panfilov/jsvat/blob/master/LICENSE
 [4]: https://github.com/se-panfilov/jsvat/releases
 [5]: https://github.com/se-panfilov/angular-jsvat