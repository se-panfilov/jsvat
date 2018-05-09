'use strict'

const gulp = require('gulp')

const size = require('gulp-size')

gulp.task('sizes', () => {
  return gulp.src([
    'dist/**/*.js',
    'dist/**/*.gz'
  ]).pipe(size({showFiles: true, showTotal: true}))
})
