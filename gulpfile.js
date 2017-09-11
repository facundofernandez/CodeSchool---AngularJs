var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    browserSync   = require('browser-sync').create(),
    reload        = browserSync.reload;

gulp.task('server', function(){
    browserSync.init({
      server: "./",
      port: 4444
    });

    gulp.watch("*.html").on('change', reload);
    gulp.watch("**/*.js",['js']);
    gulp.watch('sass/*.*',['sass']);
});

/* Tarea html */
gulp.task('html',function(){
    var stream = gulp.src([ '*.html'])
    .pipe(gulp.dest( 'dist' ))
    .pipe(browserSync.stream());

    return stream;
});

gulp.task('js', function(){
  let stream = gulp.src(['main.js','controladores/*.js','directives/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());

  return stream;
});

gulp.task('sass',function(){
    let stream = gulp.src('sass/main.scss')
        .pipe( sass().on('error', sass.logError ) )
        .pipe( autoprefixer( 'last 2 version' ) )
        .pipe(rename('style.css'))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());

    return stream;
})

gulp.task('default', ['sass','server','js']);
