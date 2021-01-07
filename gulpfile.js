var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var scss = require('gulp-sass');
var useref = require('gulp-useref');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var del = require('del');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
// var gulpIf = require('gulp-if');

var date = new Date();
// var gitRepoURL = 'https://github.com/integrityfinancialservicellc/integrityfinancialservicellc.github.io';


exports.default = gulp.series(CleanDist, Scss, Useref, BrowserSync, Watch);
exports.update = gulp.series(gulp.parallel(CleanCode, Scss, Fonts), Useref);
exports.updateFull = gulp.series(gulp.parallel(CleanDist, Scss, Fonts, Images), Useref); 

function BrowserSync(cb) {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
  cb();
}

function Scss(cb) {
    gulp.src('./app/scss/custom/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss({"bundleExec": true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/css'));
    browserSync.reload('*.css');
    cb();
}
 
function Watch(cb){
  gulp.watch('app/scss/**/*.scss', function(cb) {
    Scss(cb);
  }); 
  gulp.watch('app/*.html', function(cb) {
    browserSync.reload('*.html')
    cb();
  })

  gulp.watch('app/js/**/*.js', function(cb) {
    browserSync.reload('*.js');
    cb();
  })
  gulp.watch('app/css/custom/*.css', function(cb) {
    browserSync.reload('*.css');
    cb();
  })
  gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg', function(cb) {
    browserSync.reload('*.html')
    cb();
  })
}


function Images(cb) {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
}

function Fonts(cb) {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
}

function Useref(cb) {
    gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))

    gulp.src('app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/'))

    gulp.src('app/js/custom/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/custom'))

    // cstom vs no custom in dist
    // gulp.src('app/css/*.css')
    // .pipe(postcss([ autoprefixer ]))
    // .pipe(csso())
    // .pipe(rename({ suffix: '.min'}))
    // .pipe(gulp.dest('dist/css/'))

    gulp.src('app/css/**/*.css')
    .pipe(postcss([ autoprefixer ]))
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'))
    cb();

}

function CleanDist(cb) {
  del.sync('dist/**/*');
  cb();
}

function CleanCode(cb) {
  del.sync('dist/js/}');
  del.sync('dist/css}');
  del.sync('dist/index.html');
  cb();
}


