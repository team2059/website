var gulp = require('gulp'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    minifyHtml = require('gulp-minify-html'),
    path = require('path'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

var paths = {
    less: 'public/**/*.less',
    html: './public/**/*.html',
    dest: './public',
    less_dest: './public/css'
};

gulp.task('less', function () {
    var DEST = './public/css';
    return gulp.src('./public/css/*.less')
        .pipe(changed(paths.less_dest))
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest(paths.less_dest));
});

gulp.task('minify-html', function () {
    return gulp.src()
        .pipe(minifyHtml({}))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function () {
    return gulp.src(paths.less, {read: false})
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch(paths.less, ['less', 'clean']);
    gulp.watch(paths.html, ['minify-html']);
});

gulp.task('default', ['less', 'clean', 'minify-html']);
gulp.task('develop', ['watch']);
