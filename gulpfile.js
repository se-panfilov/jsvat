'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {

    gulp.src(__dirname)
        .pipe(webserver({
            fallback: 'index.html',
            port: 8001,
            livereload: true,
            open: true
        }));
});
