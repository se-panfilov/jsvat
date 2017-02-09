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
  jsvat.checkVAT('BG131134023'); // {isValid: true, country: 'bulgaria', value: 'BG131134023'}
  jsvat.checkVAT('BG0433170001'); //{isValid: false, country: null, value: 'BG0433170001'}
  jsvat.checkVAT('atu5-150-7409');  //{isValid: true, country: 'austria', value: 'ATU51507409'}
  jsvat.checkVAT('aTU 5 804 4146');  //{isValid: true, country: 'austria', value: 'ATU58044146'}
  ```

You can specify list of allowed countries

```javascript
  jsvat.config = ['austria', 'belgium']; //All countries except 'austria' and 'belgium' would return false
  jsvat.checkVAT('BG131134023'); //valid VAT, but result would be 'false'
```
  
To reset config just do `jsvat.config = [];`
  
Installation
----------

1. Bower

  `bower i jsvat --save`

2. NPM (node.js)

  `npm i jsvat --save`

3. Directly download one of the latest releases:

  [https://github.com/se-panfilov/jsvat/releases][4]

4. Just use `jsvat.chcekVat(vat, isDetailed)` from global scope.
  If you didn't like global scope - wrap it'

How to use jsvat?
-----
It's simple: 

```javascript
jsvat.chcekVat(vat);  //returns Object
```

 - `vat` param means VAT number (`string`), like "BG0433170001". 
   
  `vat` can be passed with '-' (`BG0-4331-70001`) or ' ' (space, like `BG 0433 17 0001`) characters;


How does jsvat check the validity?
---------

There is 2-step check:

1. Compare with list of Regexps;

  For example regexp for austria is `/^(AT)U(\d{8})$/`.
 
 Looks like `ATU99999999` is valid (it's successfied the regexp), but actually it's should be invalid.

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
 
Versions for frameworks:
--------

 - [Angular-jsvat][5]

Browsers Supports
---------

Support all browsers down to IE9 (including IE9).

Changelog
--------

#####1.1.0 
  - jsvat now always return Object (there is no more just true or false value);
  - Changed way of jsvat configuretion (instead of object with countries, now you should pass an array with list of allowed countries);

LICENSE
-------

MIT: [https://github.com/se-panfilov/jsvat/blob/master/LICENSE][3]

 [1]: https://en.wikipedia.org/wiki/VAT_identification_number
 [2]: https://se-panfilov.github.io/jsvat
 [3]: https://github.com/se-panfilov/jsvat/blob/master/LICENSE
 [4]: https://github.com/se-panfilov/jsvat/releases
 [5]: https://github.com/se-panfilov/angular-jsvat
