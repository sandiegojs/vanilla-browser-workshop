import gulp from 'gulp'
import minify from 'gulp-minify-css'
import rename from 'gulp-concat'

let styles = () => {
  return gulp.src('app/styles/**/*.css')
    .pipe(minify())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('public'))
}

gulp.task('styles', styles)
