"use strict";

const gulp = require('gulp');

gulp.task('todo', function () {
    const config = require('../config');
    const todo = require('gulp-todo');
    const src = config.js.src.concat([config.tests.src[0] + '/**/*.js']).concat(['tasks/**/*.js']);

    return gulp.src(src)
        .pipe(todo())
        .pipe(gulp.dest('./'));
});