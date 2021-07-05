var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var log = require('fancy-log');
var terser = require('gulp-terser');
var { v4 } = require('uuid');
var watchify = require('watchify');

var appName = process.env.APP_NAME || 'Testapp';

var browserified;

var bundleName;
var path;

function generateDefault() {
  browserified = browserify({
     basedir: '.',
     debug: true,
     entries: ['src/index.tsx'],
     cache: {},
     packageCache: {}
 }).plugin(tsify);

  bundleName = 'app.js';
  path = 'lib';
  return Promise.resolve();
}

gulp.task('copy-images', function() {
  return gulp.src('./src/**/*.png')
          .pipe(gulp.src('./src/**/*.jpg'))
          .pipe(rename(function (path) {
            // Alle Bilder sollen in den root image Pfad
            path.dirname = '';
          }))
          .pipe(gulp.dest(`${path}/images/`));
});

gulp.task('copy-html', function () {
  return gulp.src(['src/index.html'])
      .pipe(replace('__bundle__', bundleName))
      .pipe(replace('{{title}}', appName))
      .pipe(gulp.dest(path));
});

function generateHash() {
    browserified = browserify({
       basedir: '.',
       debug: false,
       entries: ['src/index.tsx'],
       cache: {},
     fullPaths: true,
     packageCache: {}
   })
    .ignore('preact/devtools')
    .ignore('preact/debug')
    .plugin(tsify);

  bundleName = v4() + '.js';
  path = (new Date()).toISOString();
  return Promise.resolve();
}

function watchBundle() {
    var watchedBrowserify = watchify(browserified);

    watchedBrowserify.on('update', doWatchedBundle);
    watchedBrowserify.on('log', log);
    return watchedBrowserify
        .bundle()
        .on('error', log.error)
        .pipe(source(bundleName))
        .pipe(gulp.dest(path));
}

function doWatchedBundle() {
  return browserified.bundle()
                    .pipe(source(bundleName))
                    .pipe(gulp.dest(path));
}

gulp.task('default', gulp.series(generateDefault, 'copy-html', 'copy-images', watchBundle));
gulp.task('build-dev', gulp.series(generateDefault, 'copy-html', 'copy-images', doWatchedBundle));

function doBundle() {
  return browserified.bundle()
                    .pipe(source(bundleName))
                    .pipe(buffer())
                    .pipe(terser({
                      mangle: true,
                      compress: true,
                    }))
                    .pipe(gulp.dest(path));
}

gulp.task('publish', gulp.series(generateHash, 'copy-html', 'copy-images', doBundle));
