let gulp = require("gulp");
let sass = require("gulp-sass");


gulp.task('compile', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('lib'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['compile']);
});
