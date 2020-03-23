var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
 
gulp.task('jade', function () {
  return gulp.src('./src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/templates'))
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dist/static/css'))
});

gulp.task('watch', function () {
	gulp.watch('./src/jade/**/*.jade', gulp.series('jade'));  
	gulp.watch('./src/sass/**/*.sass', gulp.series('sass'));
});
