var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require( 'gulp-autoprefixer' );
var sourceMaps = require( 'gulp-sourcemaps' );

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/'

gulp.task('style', function(){
    gulp.src( styleSRC )
    //sass.sync().on('error', sass.logError)
    .pipe( sourceMaps.init() )
    .pipe( sass( { errorLogToConsole: true, outputStyle: 'compressed' } ) )
    //.pipe( sass.sync().on('error', sass.logError) )
    .on( 'error', console.log.bind( console ) )
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe( rename( { suffix : '.min' } ) )
    .pipe( sourceMaps.write( './' ) )
    .pipe( gulp.dest( styleDIST ) )
});