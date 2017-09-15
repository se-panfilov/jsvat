[![Codacy Badge](https://api.codacy.com/project/badge/grade/874e7dce623149e18807bdc0a02671c2)](https://www.codacy.com/app/se-panfilov/jsvat)
[![bitHound Overall Score](https://www.bithound.io/github/se-panfilov/jsvat/badges/score.svg)](https://www.bithound.io/github/se-panfilov/jsvat) [![bitHound Code](https://www.bithound.io/github/se-panfilov/jsvat/badges/code.svg)](https://www.bithound.io/github/se-panfilov/jsvat)
[![Code Climate](https://codeclimate.com/github/se-panfilov/jsvat/badges/gpa.svg)](https://codeclimate.com/github/se-panfilov/jsvat)
[![Build Status](https://travis-ci.org/se-panfilov/jsvat.svg?branch=master)](https://travis-ci.org/se-panfilov/jsvat)
[![Bower version](https://badge.fury.io/bo/jsvat.svg)](http://badge.fury.io/bo/jsvat)
[![npm version](https://badge.fury.io/js/jsvat.svg)](http://badge.fury.io/js/jsvat)
[![devDependency Status](https://david-dm.org/se-panfilov/jsvat/dev-status.svg)](https://david-dm.org/se-panfilov/jsvat#info=devDependencies)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/se-panfilov/jsvat/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/jsvat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jsvat/)


jsvat
-------

[[Demo and Examples]][2]

Check the validity of the format of an EU VAT number. No dependencies.

What is it?
--------

jsvat is a small library to check validity of European (and few non-eu) VAT number. ([learn more][1] about VAT)
jsvat use 2-step check (see below) and didn't make any request for external resources.

Each country has own regexp for VAT number and different math-logic of number calculating.

What jsvat do?
--------

Just check is VAT number valid or not and which country this VAT is:

  ```javascript
  jsvat.checkVAT('BG131134023'); 
  jsvat.checkVAT('atu5-150-7409');
  jsvat.checkVAT('aTU 5 804 4146');
  ```
  
Return value
---------
 
`jsvat.checkVAT()` returns `Result` Object:

```
{
  value: 'BG131134023', // VAT without extra characters (like '-' and spaces)
  isValid: true, 
  country: { // VAT's couuntry (null if not found)
      name: country.name, //Name of the country
      isoCode: { //Country ISO codes
        short: 'BE', 
        long: 'BEL',
        numeric: '056' //String, because of forwarding zero
      }
    }
  }
```

Allow or block countries
----------

You can specify list of allowed countries

1. Add some countries into `blocked` array:
```javascript
  jsvat.blocked = ['austria', 'Belgium', 'RU', '470'] //Can be country's name or iso code
  jsvat.checkVAT('BG131134023') //result's isValid will be === false
```

To reset `blocked` just do `jsvat.blocked = [];`


2. Add some countries into `allowed` array:
```javascript
  jsvat.allowed = ['SK', 'Russia'] //All other countries would be blocked
```

To reset `allowed` just do `jsvat.allowed = [];`

*Important:* it's not recommended to use `blocked` and `allowed` in same time. To stay on a safe side use one of them.

3. Basically check result:

```javascript
function allowOnlyBelgium(vat) {
  var result = jsvat.checkVAT(vat)
  return result.isValid && result.isoCode.short === 'BE'
}
```
It's better to use comparison with `isoCode` instead of name cause some countries can have multiple variations of name 
(Netherlands aka Dutch, UK aka England, etc)

  
Installation
----------

1. Bower

  `bower i jsvat --save`

2. NPM (node.js)

  `npm i jsvat --save`

3. Directly download one of the latest releases:

  [https://github.com/se-panfilov/jsvat/releases][4]

4. Just use `jsvat.chcekVat(vat)` from global scope.
  If you didn't like global scope - wrap it'

How to use jsvat?
-----
It's simple:

```javascript
jsvat.checkVAT(vat);  //returns Object
```

 - `vat` param means VAT number (`string`), like "BG0433170001".

  `vat` can be passed with '-' (`BG0-4331-70001`) or ' ' (space, like `BG 0433 17 0001`) characters;


How does jsvat check the validity?
---------

There is 2-step check:

1. Compare with list of Regexps;

  For example regexp for austria is `/^(AT)U(\d{8})$/`.

 Looks like `ATU99999999` is valid (it's satisfy the regexp), but actually it's should be invalid.

2. Some magic mathematical counting;

 Here we make some mathematical calculation (different for each country).
 After that we may be sure that `ATU99999999`and for example `ATV66889218` isn't valid, but `ATU12011204` is valid.

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
 - Finland
 - France
 - United Kingdom
 - Croatia
 - Hungary
 - Ireland
 - Italy
 - Latvia
 - Lithunia
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

What if I don't need all countries
--------

You can do your own custom build.

 1. [Download or clone][5];
 2. Remove extra countries (that you don't) need from `src/countries`;
 3. Build it `gulp build` (don't forget to make `npm i` first);

Versions for frameworks:
--------

 - [Angular-jsvat][5] (for angular 1.x.x)

Browsers Supports
---------

Support all browsers down to IE9 (including IE9).

Changelog
--------

#####1.2.0
 - Added more info regarding countries in result (`isoCodes`, `name`)

#####1.1.0
  - jsvat now always return Object (there is no more just true or false value);
  - Changed way of jsvat configuration (instead of object with countries, now you should pass an array with list of allowed countries);

LICENSE
-------

MIT: [https://github.com/se-panfilov/jsvat/blob/master/LICENSE][3]

 [1]: https://en.wikipedia.org/wiki/VAT_identification_number
 [2]: https://se-panfilov.github.io/jsvat
 [3]: https://github.com/se-panfilov/jsvat/blob/master/LICENSE
 [4]: https://github.com/se-panfilov/jsvat/releases
 [5]: https://github.com/se-panfilov/angular-jsvat
