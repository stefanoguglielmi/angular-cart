
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    watch       = require("gulp-watch"),
    browserSync = require('browser-sync').create(),
    autoprefixer = require("gulp-autoprefixer"),
    uglify      = require("gulp-uglify"),
    sass        = require("gulp-sass"),
    jshint      = require('gulp-jshint');

var config = {
    js: {
        src: './app/js/app.js',       // Entry point
        outputDir: './dist/js/',  // Directory to save bundle to
        outputFile: 'app.js' // Name to use for bundle
    },
};

gulp.task('fonts', function () {
    return gulp.src("app/fonts/**/*")
        .pipe(gulp.dest("dist/fonts/"));
});

gulp.task('data', function () {
    return gulp.src("app/data/**/*")
        .pipe(gulp.dest("dist/data/"));
});

gulp.task('scripts', function () {
    return gulp.src("app/js/**/*.js")
        .pipe(gulp.dest("dist/js/"));
});

gulp.task('images', function () {
    return gulp.src("app/images/**/*")
        .pipe(gulp.dest("dist/images/"));
});

gulp.task('html', function () {
    return gulp.src("app/**/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task('sass', function(){
  gulp.src('./app/scss/style.scss')
      .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
      .on('error', gutil.log)
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('server', function () {
    browserSync.init({
        injectChanges: true,
        logLevel: "debug",
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("app/scss/**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("app/**/*.html", ['html']).on('change', browserSync.reload);
});

gulp.task('build', ['scripts', 'images', 'sass', 'html', 'data', 'fonts']);
gulp.task('default', ['server']);
