'use strict';

var electron = require('electron-connect').server.create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var cfg = require('./config.json');
var ap = require('gulp-autoprefixer');

gulp.task('css', function () {
  return gulp.src(cfg.gulp.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(ap())
    .pipe(gulp.dest(cfg.gulp.dest));
});
 
gulp.task('watch', function () {
  electron.start();
  gulp.watch(cfg.gulp.watch, ['css', 'live:reload']);
});

gulp.task('live:reload', function() {
  electron.reload();
});


gulp.task('default', ['css', 'watch']);
