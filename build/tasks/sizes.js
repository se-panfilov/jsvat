"use strict";

const gulp = require('gulp');

gulp.task('sizes', function () {
  var size = require('gulp-size');

  return gulp.src([
    'dist/**/*.js',
    'dist/**/*.gz'
  ]).pipe(size({showFiles: true, showTotal: true}));
});