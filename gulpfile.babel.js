'use strict'

import gulp from 'gulp'
import requireDir from 'require-dir'
import gls from 'gulp-live-server'

requireDir('./tasks')

function serve() {
  var server = gls.static('public', 3000)

  server.start()

  gulp.watch('app/index.html', (file) => {
    html()
    server.notify.apply(server, [file])
  })

  gulp.watch(['app/**/*.js'], ['scripts'])
  gulp.watch(['app/**/*.css'], ['styles'])
}

gulp.task('serve', serve)

gulp.task('build', ['scripts','styles','html'])

gulp.task('default', ['build','serve'])
