import gulp from 'gulp'

let html = () => {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('public'))
}

gulp.task('html', html)
