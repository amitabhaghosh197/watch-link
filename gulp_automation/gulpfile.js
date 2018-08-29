const gulp = require('gulp');
const gutil = require('gulp-util');

// Browser Sync

const browserSync = require('browser-sync').create();


// FOR SASS
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

//FOR JS MINIFY

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

//COMPRESS IMAGES

const imagemin = require('gulp-imagemin');

//NOTIFY
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const notifier = require('node-notifier');

const merge2 = require('merge2');
const filepath = require('./file-path.js');


// File Paths

const assetsDir      = filepath.assets_dir;
const unoptimizedDir = assetsDir + '/unoptimized';
const scssDir        = assetsDir + '/scss';

const DestDir = {
	cssDir : assetsDir + '/css/',
	jsDir  : assetsDir + '/js/',
	imgDir : assetsDir + '/img/'
}


// Static Server + watching scss/mob files
gulp.task('serve', ['sassify'], function() {

    browserSync.init({

        proxy: {
            target: 'http://localhost/projects/asia-focus/html/'
        }
    });

    gulp.watch([scssDir + '/*.scss', scssDir + '/**/*.scss'], ['sassify']);
    gulp.watch(["../html/*.php", "../html/**/*.php"]).on('change', browserSync.reload);
});


//SASSIFY
gulp.task('sassify', function() {
    return gulp.src(scssDir + '/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true }).on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something"
        })))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest(DestDir.cssDir))
        .pipe(browserSync.stream());


});


// Minify
gulp.task('fileOptimize', function() {

    var scriptMinify = gulp.src(filepath.jsFilesArr())
        .pipe(concat('apps.js'))
        .pipe(gulp.dest(DestDir.jsDir))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(DestDir.jsDir));


    var jsStream = merge2(scriptMinify);
    return jsStream;
});

/**
 * SVGOPTIMIZE
 * The best way to use with gulp-imagemin
 * No need to require svgo / any other gulp svg optimize plugins
 * The other plugins removeViewbox autometically which
 * is not good for styling with css
 * So use this process https://www.npmjs.com/package/gulp-imagemin
 * and use options from SVGO NPM https://www.npmjs.com/package/svgo
 */
gulp.task('svg-optimize', function(){
    return gulp.src(unoptimizedDir+ '/svg/*.svg')

      .pipe(imagemin([
          imagemin.svgo({
              plugins:[
                {removeViewBox: false},
                {cleanupIDs: false}

              ]
          })
      ]))
      .pipe(gulp.dest(DestDir.imgDir +'svg/' ));
   });

//Watch

gulp.task('watch', function() {
    return gulp.watch([assetsDir + '/lib/**/*.js', assetsDir + '/lib/*.js'], ['fileOptimize']);

});

gulp.task('default', ['serve', 'fileOptimize', 'watch']);
