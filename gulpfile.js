const child        = require( 'child_process' );
const browserSync  = require( 'browser-sync' ).create();
const gulp         = require( 'gulp' );
const concat       = require( 'gulp-concat' );
const gutil        = require( 'gulp-util' );
const sass         = require( 'gulp-sass' );
const cssnano      = require( 'gulp-cssnano' );
const autoprefixer = require( 'gulp-autoprefixer' );

const siteRoot  = '_site';
const scssFiles = '_sass/*.scss';

/**
 * Style compile and concatenate task
 */
gulp.task( 'css', () => {
  return gulp.src( scssFiles )
    .pipe( sass() )
    .pipe( concat( 'main.css' ) )
    .pipe( autoprefixer( {
      browsers : [ 'last 2 versions' ],
			cascade  : false
    } ) )
    .pipe( cssnano( {
        discardComments : {
          removeAll : true
        }
      } ) )
    .pipe( gulp.dest( './assets/css' ) );
} );

/**
 * Run Jekyll build task as child process
 */
gulp.task( 'jekyll', () => {
  const jekyll = child.spawn( 'jekyll', [ 'build', '--watch' ] );

  const jekyllLogger = ( buffer ) => {
    buffer.toString()
      .split( /\n/ )
      .forEach( ( message ) => gutil.log( 'Jekyll: ' + message ) );
  };

  jekyll.stdout.on( 'data', jekyllLogger );
  jekyll.stderr.on( 'data', jekyllLogger );
} );

/**
 * Live reload task
 */
gulp.task( 'serve', () => {
  browserSync.init( {
    files  : [ siteRoot + '/**' ],
    port   : 4000,
    server : {
      baseDir : siteRoot
    }
  } );

  gulp.watch( scssFiles, [ 'css' ] );
} );

/**
 * Watch task
 */
gulp.task( 'watch', [ 'css', 'jekyll', 'serve' ] );
