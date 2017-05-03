var gulp      = require('gulp'),
sass      = require('gulp-ruby-sass'),
prefix    = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
refresh   = require('gulp-livereload');

gulp.task('compileStyles', function() {
	return sass('css/styles.scss', {
		noCache      : true,
		precision    : 4,
		unixNewlines : true
	})
	.pipe(prefix('last 3 version'))
	.pipe(minifycss())
	.pipe(gulp.dest('css/'))
	.pipe(refresh());
}); 


gulp.task('watch', function() {
	refresh.listen();
		gulp.watch('css/**/*.{sass,scss}', ['compileStyles']);
});