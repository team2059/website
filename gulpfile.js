var gulp = require('gulp'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    minifyHtml = require('gulp-minify-html'),
    path = require('path'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('less', function () {
    var DEST = './public/css';
    return gulp.src('./public/css/*.less')
        .pipe(changed(DEST))
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('minify-html', function () {
    var DEST = './public';
    return gulp.src('./public/**/*.html')
        .pipe(minifyHtml({}))
        .pipe(gulp.dest(DEST));
});

gulp.task('clean', function () {
    return gulp.src('public/**/*.less', {read: false})
        .pipe(clean());
});

gulp.task('default', ['less', 'clean', 'minify-html']);
