"use strict";

const gulp = require('gulp');

const config = require('../config');
const jshint = require('gulp-jshint');
const jshintReporter = jshint.reporter('jshint-stylish');


gulp.task('lint', function () {

  return gulp.src(config.js.src)
      .pipe(jshint({
        globalstrict: true,
        strict: false,
        globals: {
          angular: true,
          localStorage: true,
          console: true
        }
      }))
      .pipe(jshintReporter);
});