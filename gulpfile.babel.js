'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import requireDir from 'require-dir'
import gls from 'gulp-live-server'

requireDir('./tasks')

function serve() {
  var server = gls.static('public', 3000)

  server.start()

  gulp.watch('public/index.html', (file) => {
    server.notify.apply(server, [file])
  })

  gulp.watch(['app/**/*.js'], ['scripts'])
  gulp.watch(['app/**/*.css'], ['styles'])
}

gulp.task('serve', serve)

gulp.task('default', ['scripts','styles','serve'])
