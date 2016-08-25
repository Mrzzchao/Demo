'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream; // 将Bower依赖自动注入HTML文件中
var _ = require('lodash'); // 模板转换成JavaScript，有点像Angular的{{}}

var browserSync = require('browser-sync');

/**
 * 注射后刷新浏览器
 */
gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

/**
 * 注射css,js文件
 * @type {[type]}
 */
gulp.task('inject', ['scripts', 'styles'], function() {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], {
    read: false   // 无需读文件
  });

  var injectScripts = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.module.js')
  ], {
    read: false
  }); // 无需读文件

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))       // 注射css
    .pipe($.inject(injectScripts, injectOptions))      // 注射JS
    .pipe(wiredep(_.extend({}, conf.wiredep)))         // 注入依赖文件
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));   // 注射到./tmp/serve目录下
});
