'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {
  var sassOptions = {
    outputStyle: 'expanded',
    precision: 10
  };

  // 需要注入的文件
  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/*.scss'),
    path.join('!' + conf.paths.src, '/app/index.scss')   // 除了该文件
  ], { read: false });

  // 注入设置
  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',  // 注入开始标志
    endtag: '// endinjector', // 注入结束标志
    addRootSlash: false       // 移除'/'
  };


  return gulp.src([
    path.join(conf.paths.src, '/app/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))   // 将app文件下所有的.scss文件用@import导入到index.scss里
    .pipe(wiredep(_.extend({}, conf.wiredep)))    // bower依赖注入
    .pipe($.sourcemaps.init())                                               // 为了以后方便Debug
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))        // sass编译错误处理
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))   // autoprefixer错误处理
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));              // 最后合并到/serve/app/下的index.css文件下
};
