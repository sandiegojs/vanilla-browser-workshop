import gulp from 'gulp'
import minify from 'gulp-minify'
import rename from 'vinyl-source-stream'
import browserify from 'browserify'
import glob from 'glob'
import sourcemaps from 'gulp-sourcemaps'
import buffer from 'vinyl-buffer'

let handleErrors = (err) => {
  console.error(err)
  this.emit('end')
}

let scripts = () => {
  let filenames = glob.sync('app/**/*.js')
  return browserify({
      entries: filenames,
      debug: true,
      paths: ['./app']
    })
    .transform('babelify')
    .bundle()
    .on('error', handleErrors)
    .pipe(rename('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
}

gulp.task('scripts', scripts)
