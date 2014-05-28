var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');
var gulpFilter = require('gulp-filter');
var transpiler = require('gulp-es6-module-transpiler');

var paths = {
    deps: [
        "bower_components/ember-loader/loader.js",
        "bower_components/react/react.js",
        "src/**/*.jsx"
    ]
};

var filter = gulpFilter(function(file) {
  return file.path.indexOf('bower_components') === -1;
});

gulp.task('default', function(){
    return gulp.src(paths.deps)
        .pipe(filter)
        .pipe(react())
        .pipe(transpiler({
            type: "amd",
        }))
        .pipe(filter.restore())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('dist'));
});
