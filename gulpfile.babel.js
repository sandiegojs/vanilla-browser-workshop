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

  gulp.watch(['public/app/app.html'], ['display','dist'])
  gulp.watch(['public/app/app.css'], ['styles','dist'])
}

gulp.task('serve', serve)

gulp.task('default', ['scripts','styles','serve'])
