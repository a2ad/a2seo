'use strict';

var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'), // Load all gulp plugins automatically
	plugins = gulpLoadPlugins(),

	stylish = require('jshint-stylish'),
	browserSync = require('browser-sync'),
	pngquant = require('imagemin-pngquant'),
	reload = browserSync.reload,
	pkg = require('./package.json'), // Include directories from package.json configs
	dirs = pkg['configs'].directories,

	// General files
	_files = ['*.html', 'build/**/*'];


	// COPY ===================================================

		gulp.task('copy:html5shiv', function() {
			return gulp.src(dirs._components+'/html5shiv/dist/html5shiv.js')
						.pipe(plugins.replace('/*!', '/*'))
						.pipe(plugins.rename({suffix: '.min'}))
						.pipe(plugins.uglify())
						.pipe(gulp.dest(dirs._build+'/js/libs/'));
		});

		gulp.task('copy:normalize', function() {
			return gulp.src(dirs._components+'/normalize-css/normalize.css')
						.pipe(plugins.replace('/*!', '/*'))
						.pipe(plugins.rename('normalize.scss'))
						.pipe(gulp.dest(dirs._assets+'/scss/3.generic'));
		});

	// IMAGES ==================================================

		// Imagemin

			gulp.task('imagemin', function() {
				return gulp.src(dirs._assets+'/img/*')
							.pipe(plugins.imagemin({
								progressive: true,
								intercaled: true,
								use: [pngquant]
							}))
							.pipe(gulp.dest(dirs._build+'/img'));
			});

	// STYLES ==================================================

		// main.min.css

			gulp.task('sass', function() {
				return gulp.src(dirs._assets+'/scss/main.scss')
							.pipe(plugins.rename({suffix: '.min'}))
							.pipe(plugins.sourcemaps.init())
							.pipe(plugins.sass({
								outputStyle: 'compressed'
							}))
							.on(plugins.sass(), plugins.sass.logError)
							.pipe(plugins.sourcemaps.write('.'))
							.pipe(gulp.dest(dirs._build+'/css'))
							.pipe(plugins.livereload())
							.pipe(reload({stream: true}));
			});

	// SCRIPTS ================================================

		// JSHint

			gulp.task('lint', ['concat'], function() {
				return gulp.src(dirs._assets+'/js/*.js')
							.pipe(plugins.jshint())
							.pipe(plugins.jshint.reporter(stylish))
							.pipe(plugins.jshint.reporter('default'));
			});

			// Concat
			gulp.task('concat', function() {

				// scripts.min.js
				gulp.src([
	    				dirs._assets+'/js/scripts.js',
					])
	    		    .pipe(plugins.concat('scripts.js'))
	    		    .pipe(gulp.dest(dirs._build+"/js"))
	    		    .pipe(plugins.rename({suffix: ".min"}))
	    		    .pipe(plugins.uglify())
	    		    .pipe(gulp.dest(dirs._build+"/js"))
	                .pipe(plugins.livereload())
	    		    .pipe(reload({stream:true}));
    		});

	// BROWSER SYNC ===========================================

			gulp.task('browser-sync', function() {
				browserSync.init({
					proxy: 'localhost' // Proxy do server
				});
			});

	// WATCH ==================================================

			gulp.task('watch', function() {

				// Livereload

					plugins.livereload.listen();

				// Watch files

					gulp.watch('*.html').on('change', function() {
						plugins.livereload.changed('/*.html');
					});

				// Watch JS

					gulp.watch([dirs._assets+'/js/*.js'], ['lint']);

				// Watch CSS

					gulp.watch([dirs._assets+'/scss/**/*.scss'], ['sass']);

				// Watch images

					gulp.watch([dirs._assets+'/img/*'], ['imagemin']);
			});	

	// RUN TASKS ===============================================

			gulp.task('default', ['watch', 'copy']);
			gulp.task('images', ['imagemin']);
			gulp.task('sync', ['watch', 'browser-sync']);
			gulp.task('css', ['sass']);
			gulp.task('js', ['lint', 'concat']);
			gulp.task('copy', [
				'copy:html5shiv',
				'copy:normalize'
			]);










