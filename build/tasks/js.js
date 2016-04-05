"use strict";

const gulp = require('gulp');

gulp.task('js', function () {
    const config = require('../config');
    const sourcemaps = require('gulp-sourcemaps');
    const uglify = require('gulp-uglify');
    const concat = require('gulp-concat');
    const rename = require('gulp-rename');
    const notify = require('gulp-notify');
    const plumber = require('gulp-plumber');

    return gulp.src(config.js.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Build JS',
                    message: err.message
                };
            })
        }))
        .pipe(concat(config.projectName + '.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: config.projectName + '.min'}))
        .pipe(gulp.dest(config.dest  + config.projectName))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))
        ;

});

