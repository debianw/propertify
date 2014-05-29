/**
 *
 */

var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , _if = require('gulp-if')
  , rename = require('gulp-rename')
  , env = process.env.NODE_ENV || 'development';

/**
 * @task client-js
 */

gulp.task('client-js', function () {
  return gulp.src('lib/client/boot/index.js')

    // Browserify
    .pipe(browserify({
        debug: env === 'development', 
        transform: ['reactify']
    }))

    // Uglify
    .pipe(_if(env === 'production', uglify()))

    // Rename
    .pipe(rename('client.js'))

    // Destination
    .pipe(gulp.dest('build/'+env+'/js'));
});