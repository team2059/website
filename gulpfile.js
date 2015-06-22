var gulp = require('gulp'),
    gutil = require('gulp-util'),
    runSequence = require('run-sequence'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    minifyHtml = require('gulp-minify-html'),
    run = require('gulp-run'),
    ftp = require( 'vinyl-ftp' ),
    path = require('path'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({
        advanced: true,
        mediaMerging: true
    }),
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
    var base_url = (process.env.BASE_URL) ?
        process.env.BASE_URL :
        'http://localhost:2059';
    return run('hugo -D -b ' + base_url).exec()
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

gulp.task('deploy', function () {
    var connection = ftp.create({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        parallel: 2,
        log: gutil.log
    });

    var output = 'public/**';

    return gulp.src(output, {
        base: './public',
        buffer: false
    })
      .pipe(connection.newer('/'))
      .pipe(connection.dest('/'));
})

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
