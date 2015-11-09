'use strict';

var gulp = require('gulp'), concat, rename, uglify, sourcemaps, changed, jshint, size, ngAnnotate, buddyjs, gzip;

var src = {
    jsDir: [
        'src/**/..js'
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

gulp.task('magic_numbers', function () {
    buddyjs = buddyjs || require('gulp-buddy.js');

    return gulp.src(src.jsDir)
        .pipe(buddyjs({
            ignore: [0, 1, 2],
            reporter: 'detailed'
        }));
});

gulp.task('sizes_dist', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css',
        'dist/**/*.gz'
    ]).pipe(size());
});

gulp.task('js', function () {
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    changed = changed || require('gulp-changed');
    concat = concat || require('gulp-concat');
    gzip = gzip || require('gulp-gzip');

    return gulp.src(src.jsDir)
        .pipe(changed(dest.dist))
        .pipe(concat('arexio.js'))
        .pipe(concat('arexio.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'arexio.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
        .pipe(gzip())
        .pipe(gulp.dest(dest.dist))
        ;
});


gulp.task('jsvat', function () {
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    concat = concat || require('gulp-concat');
    gzip = gzip || require('gulp-gzip');

    return gulp.src([
        'libs/jsvat/ng-jsvat.js'
    ])
        .pipe(uglify())
        .pipe(rename({basename: 'ng-jsvat.min'}))
        .pipe(gulp.dest('libs/jsvat/'))
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');

    gulp.watch(src.jsDir, ['js']);
});

gulp.task('build_vendor', function () {
    gulp.start('vendor_js');
    gulp.start('vendor_css');
    gulp.start('purify_css');
});

gulp.task('build', function () {
    gulp.start('js');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});

