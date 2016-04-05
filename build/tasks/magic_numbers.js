"use strict";

const gulp = require('gulp');

gulp.task('magic_numbers', function () {
    const config = require('../../config');
    const buddyjs =  require('gulp-buddy.js');

    return gulp.src(config.js.src)
        .pipe(buddyjs({
            ignore: [0, 1],
            reporter: 'detailed'
        }));
});