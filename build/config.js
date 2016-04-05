"use strict";

const SRC = 'src';
const DEST = 'dist';
const PROJECT_NAME = 'arexio';
const IMG_SRC = 'src/img';
const TESTS_SRC = 'tests';
const VENDOR_NAME = 'vendor';
const BOWER_SRC = 'libs/bower_components';
const LIBS_SRC = 'libs';

const vendorJsSrc = [
    BOWER_SRC + '/angular/angular.js',
    BOWER_SRC + '/deepstream.io-client-js/dist/deepstream.js',
    LIBS_SRC + '/ui-bootstrap-custom/ui-bootstrap-custom-tpls-0.14.3.js',
    BOWER_SRC + '/angular-animate/angular-animate.js',
    BOWER_SRC + '/angular-resource/angular-resource.js',
    BOWER_SRC + '/angular-cookies/angular-cookies.js',
    BOWER_SRC + '/angular-aria/angular-aria.js',
    BOWER_SRC + '/angular-bootstrap/ui-bootstrap.js',
    BOWER_SRC + '/angular-ui/build/angular-ui.js',
    BOWER_SRC + '/angular-ui-router/release/angular-ui-router.js',
    BOWER_SRC + '/angular-ui-router-anim-in-out/anim-in-out.js',
    BOWER_SRC + '/angular-ui-validate/dist/validate.js',
    BOWER_SRC + '/angular-loading-bar/build/loading-bar.js',
    BOWER_SRC + '/zeroclipboard/dist/ZeroClipboard.js',
    BOWER_SRC + '/angular-zeroclipboard/dist/angular-zeroclipboard.min.js',
    BOWER_SRC + '/angular-jsvat/dist/angular-jsvat.js',
    BOWER_SRC + '/AngularJS-Toaster/toaster.js',
    BOWER_SRC + '/ng-file-upload/ng-file-upload-all.min.js',
    BOWER_SRC + '/angular-datepicker-oldschool/dist/angular-pure-datepicker.js'
];

const ieShims = [
    BOWER_SRC + '/json3/lib/json3.min.js'
];

const vendorCssSrc = [
    LIBS_SRC + '/bootswatch/paper/bootstrap.min.css',
    BOWER_SRC + '/angularjs-toaster/toaster.css',
    BOWER_SRC + '/angular-loading-bar/build/loading-bar.min.css',
    BOWER_SRC + '/angular-datepicker-oldschool/dist/angular-pure-datepicker.css'
];

const config = {
    dest: DEST,
    projectName: PROJECT_NAME,
    styles: {
        src: [
            SRC + '/common_styles/**/*.styl',
            SRC + '/components/**/*.styl',
            SRC + '/pages/**/*.styl'
        ]
    },
    jade: {
        src: [
            SRC + '/pages/**/*.jade',
            SRC + '/components/**/*.jade'
        ]
    },
    js: {
        src: [
            SRC + '/main.js',
            SRC + '/pages/**/*.js',
            SRC + '/configs/**/*.js',
            SRC + '/factories/**/*.js',
            SRC + '/components/**/*.js',
            SRC + '/constants/**/*.js'
        ]
    },
    configs: {
        modulePrefix: PROJECT_NAME + '.configs.',
        src: SRC + '/configs/',
        dest: SRC + '/configs/'
    },
    libs: {
        src: [LIBS_SRC],
        bower_components: BOWER_SRC
    },
    vendor: {
        src: DEST,
        outputName: VENDOR_NAME
    },
    tests: {
        src: [TESTS_SRC]
    },
    img: {
        src: IMG_SRC
    },
    vendorJsSrc: vendorJsSrc,
    vendorCssSrc: vendorCssSrc,
    ieShims: ieShims
};

module.exports = config;
