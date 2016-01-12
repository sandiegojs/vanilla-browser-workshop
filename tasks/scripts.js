import gulp from 'gulp'
import minify from 'gulp-minify'
import rename from 'gulp-rename'

let scripts = () => {
  return gulp.src('app/**/*.js')
    .pipe(minify())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('public'))
}

gulp.task('scripts', scripts)
