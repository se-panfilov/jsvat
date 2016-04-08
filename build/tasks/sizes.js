"use strict";

const gulp = require('gulp');

const size = require('gulp-size');


gulp.task('sizes', function () {
  return gulp.src([
    'dist/**/*.js',
    'dist/**/*.gz'
  ]).pipe(size({showFiles: true, showTotal: true}));
});