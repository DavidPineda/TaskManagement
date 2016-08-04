"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build", "src/assest/css"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task("views", () => {
    return gulp.src("src/app/**/*.html")
        .pipe(gulp.dest("build/app"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["views"], () => {
    return gulp.src(["src/*.{html,js}", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

/**
 * Compile all Sass files in css
 */
gulp.task("styles_compile", () => {
    return gulp.src("src/assest/sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/assest/css"));
});

/**
 * Minified css files
 */
gulp.task("styles", ["styles_compile"], () => {
    return gulp.src("src/assest/css/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'));
});

/**
 * Minified all js files
 */
gulp.task("scripts", () => {
    return gulp.src("src/assest/lib/*.js")
        //.pipe(concat('materialize.js'))
        .pipe(minify())
        .pipe(gulp.dest('build/lib'));
});

/**
 * Copy Fonts
 */
gulp.task("copyfonts", () => {
    return gulp.src('src/assest/fonts/**/*.{eot,ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('build/fonts'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'angular2-jwt/angular2-jwt.js',
            'jwt-decode/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', () => {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/assest/**/*.scss"], ['styles']).on('change', function (e) {
        console.log('Sass file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/assest/**/*.js"], ['scripts']).on('change', function (e) {
        console.log('JavaScript file ' + e.path + ' has been changed. Updating.');
    });       
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'scripts', 'styles', 'libs', 'copyfonts'], () => {
    console.log("Building the project ...");
});