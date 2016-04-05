"use strict";

const gulp = require('gulp');

gulp.task('make', function () {
    const runSequence = require('run-sequence').use(gulp);
    const config = require('../config');

    return runSequence(
        'js',
        'gzip'
    );
});