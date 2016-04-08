'use strict';

var gulp = require('gulp');
var config = require('./build/config.js');
var requireDir = require('require-dir');
requireDir('./build', { recurse: true });

gulp.task('default', function () {
    gulp.start('make');
    gulp.start('watch');
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');

    gulp.watch(config.js.src, ['js', 'todo']);
});