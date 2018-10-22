var gulp = require('gulp'),
    gutil = require('gulp-util'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css')
    ftp = require( 'vinyl-ftp' ),
    path = require('path');

var paths = {
    html: './public/**/*.html',
    css: './public/branding/css/*.css',
    css_dest: './public/branding/css/',
    dest: './public',
};

gulp.task('minify-html', function () {
    return gulp.src(paths.html)
        .pipe(minifyHtml({}))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('minify-css', function() {
    return gulp.src(paths.css)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.css_dest));
});

gulp.task('deploy', function () {
    var connection = ftp.create({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
	secureOptions: false,
	rejectUnauthorized: false,
        parallel: 2,
        log: gutil.log
    });

    var output = 'public/**';

    return gulp.src(output, {
        base: './public',
        buffer: false
    })
      .pipe(connection.newer('.'))
      .pipe(connection.dest('.'));
})

gulp.task('default', ['build']);
gulp.task('build', ['minify-html', 'minify-css']);
