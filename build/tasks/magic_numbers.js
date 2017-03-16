"use strict"

const gulp = require('gulp')

const config = require('../config')
const buddyjs = require('gulp-buddy.js')


gulp.task('magic_numbers', () => {

  return gulp.src(config.js.src)
      .pipe(buddyjs({
        ignore: [0, 1],
        reporter: 'detailed'
      }))
})
