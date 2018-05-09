'use strict'

const gulp = require('gulp')

const config = require('../config')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const beautify = require('gulp-beautify')
const wrap = require('gulp-wrap')

gulp.task('js', () => {
  const moduleWrap =
    'var jsvat = (function () {' +
    '\n\r\'use strict\'' +
    '\n\r<%= contents %>' +
    '\n\r//Support of node.js' +
    '\n\rif (typeof module === \'object\' && module.exports) module.exports = exports' +
    '\n\rreturn exports' +
    '\n\r})()'

  return gulp.src(config.js.src)
    .pipe(plumber({
      errorHandler: notify.onError((err) => {
        return {
          title: 'Build JS',
          message: err.message
        }
      })
    }))
    .pipe(concat(config.projectName + '.js'))
    .pipe(wrap(moduleWrap))
    .pipe(beautify({
      indent_size: 2
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({basename: config.projectName + '.min'}))
    .pipe(gulp.dest(config.dest))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
})
