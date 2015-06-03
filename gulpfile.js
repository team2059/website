var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    minifyHtml = require('gulp-minify-html'),
    run = require('gulp-run'),
    path = require('path'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var paths = {
    less: './public/css/*.less',
    html: './public/**/*.html',
    hugo: ['./content/**/*', './layouts/**/*', './static/**/*'],
    dest: './public',
    less_dest: './public/css'
};

gulp.task('run-hugo', function() {
    var base_url = (process.env.BASE_URL) ? ' -b ' + process.env.BASE_URL : '';
    return run('hugo -D' + base_url).exec()
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public",
        },
        port: 2059
    });
});

gulp.task('clean', function () {
    return gulp.src(paths.less, {
        read: false
    })
        .pipe(clean());
});

gulp.task('less', function () {
    var DEST = './public/css';
    return gulp.src('./public/css/style.less')
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest(paths.less_dest))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('minify-html', function () {
    return gulp.src(paths.html)
        .pipe(minifyHtml({}))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function () {
    gulp.watch(paths.hugo, ['prepare']);
});

gulp.task('build', function (callback) {
    runSequence(['minify-html', 'less'], 'clean', callback);
});

gulp.task('prepare', function (callback) {
    runSequence('run-hugo', 'build', callback);
});

gulp.task('default', ['build']);
gulp.task('develop', ['prepare', 'watch', 'browser-sync']);
