var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function(done) {
    gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", gulp.series('scss')).on('change', () => {
        browserSync.reload();
        done();
    });;
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});

gulp.task('default', gulp.series('scss', 'serve'));