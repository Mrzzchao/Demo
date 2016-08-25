'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({    // 将模块加载委托给$,并且规定需要加载的文件名正则
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

/**
 * 将html文件添加到angular模板缓存中
 */
gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),     // 将多个地址糅合在一起
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.htmlmin({                               // html压缩
      removeEmptyAttributes: true,                  // 移除空属性
      removeAttributeQuotes: true,                  // 删除属性引号
      collapseBooleanAttributes: true,              // <input value="foo" readonly="readonly"> to <input value="foo" readonly>
      collapseWhitespace: true                      // 移除空格
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'ang',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));   // 输出成templateCacheHtml.js文件
});

gulp.task('html', ['inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html', { restore: true });
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.useref())        // 将link,script标签的文件合并成一个标签，并输出到指定的文件
    .pipe(jsFilter)          // 过滤出js文件
    .pipe($.sourcemaps.init())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))   // 压缩JS
    .pipe($.rev())           // 生成带 hash 版本的JS文件
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    // .pipe($.sourcemaps.init())
    .pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))  // 将css文件中的字符串替代
    .pipe($.cssnano())       // css压缩
    .pipe($.rev())           // 生成带 hash 版本的CSS文件
    // .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.htmlmin({   // html文件处理
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
  });

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())                           // bower_components目录中的文件
    .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))        // 筛选出字体文件
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

// 复制其他所有文件到dist
gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')   // 除了html,css,js等的其他文件
  ])
    .pipe(fileFilter)                                             // 判断是否为文件
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

// 删除dist和tmp目录
gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

// gulp 构建入口
gulp.task('build', ['html', 'fonts', 'other']);
