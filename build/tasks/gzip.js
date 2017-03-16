"use strict"

const gulp = require('gulp')

const config = require('../config')
const gzip = require('gulp-gzip')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')


gulp.task('gzip', function () {
  return gulp.src(config.dest + '/**/*.js')
      .pipe(plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'GZIP JS',
            message: err.message
          }
        })
      }))
      .pipe(gzip())
      .pipe(gulp.dest(config.dest))
})

