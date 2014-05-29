var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('default', function(){
    var bundle = browserify({entries: './src/app.js'})
      .transform('reactify')
      .bundle({ debug: true })
      .pipe(source('deps.min.js'))
      .pipe(gulp.dest('dist'));
});
