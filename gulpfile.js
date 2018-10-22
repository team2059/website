var gulp = require('gulp'),
    gutil = require('gulp-util'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css')
    path = require('path');

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

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
    var config = {
        username: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        host: process.env.FTP_HOST,
        port: 21,
        localRoot: __dirname + "/public/",
        remoteRoot: "/",
        include: ['*']
    }
        
    ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
    });
})

gulp.task('default', ['build']);
gulp.task('build', ['minify-html', 'minify-css']);
