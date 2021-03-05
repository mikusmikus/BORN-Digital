const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('src/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles/css/'));
});

gulp.task('clean', () => {
    return del([
        'src/styles/css/index.css',
    ]);
});

gulp.task('images', () => {
    del(['./dist/images/*']);
    gulp.src('src/assets/images/**/*.{png,jpg,gif}').pipe(gulp.dest('./dist/images'));
  });

gulp.task('watch', () => {
    gulp.watch('src/styles/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['watch']));

