'use strict';

var gulp = require('gulp'), rename, uglify, sourcemaps, jshint, size, buddyjs, todo;

var src = {
    jsDir: [
        'src/**/*.js'
    ]
};

var dest = {
    dist: 'dist'
};

gulp.task('lint', function () {
    jshint = jshint || require('gulp-jshint');

    return gulp.src(src.jsDir)
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                angular: true,
                localStorage: true,
                console: true
            }
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('webstandards', function () {
    var webstandards = require('gulp-webstandards');
    
    return gulp.src(src.jsDir)
        .pipe(webstandards());
});

gulp.task('magic_numbers', function () {
    buddyjs = buddyjs || require('gulp-buddy.js');

    return gulp.src(src.jsDir)
        .pipe(buddyjs({
            ignore: [0, 1, 2],
            reporter: 'detailed'
        }));
});

gulp.task('sizes', function () {
    size = size || require('gulp-size');

    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css',
        'dist/**/*.gz'
    ]).pipe(size({showFiles: true, showTotal: true}));
});

gulp.task('js', function () {
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');

    return gulp.src(src.jsDir)
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'jsvat.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
        ;
});


gulp.task('todo', function () {
    todo = require('gulp-todo');

    gulp.src('src/**/*.*')
        .pipe(todo())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');

    gulp.watch(src.jsDir, ['js', 'todo']);
});

gulp.task('build', function () {
    gulp.start('js');
    gulp.start('todo');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});

