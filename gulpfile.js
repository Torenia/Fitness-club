var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglifyjs');

gulp.task('browser-sync', [
    'styles',
    'images',
    'scriptsCommon',
    'html',
    'data'
], function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false,
        files: ['./dist/**/*.html', './dist/js/*.js', './dist/css/*.css']
    });
});

gulp.task('styles', function () {
    gulp.src('app/sass/*.sass')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(minifycss(''))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
    return gulp.src('app/images/**')
        .pipe(gulp.dest('dist/images/'));
});


gulp.task('scriptsCommon', function () {
    return gulp.src('app/js/*.js')
        // .pipe(uglify(''))
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('data', function() {
    return gulp.src('app/data/*.json')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/*.sass', ['styles']);
    gulp.watch('app/js/*.js', ['scriptsCommon']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/data/schedule.json', ['data']);
});
gulp.task('default', ['watch', 'browser-sync']);

