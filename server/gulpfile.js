var gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    clientPath = path.join(__dirname, '../client');

gulp.task('clean', function(){
    return del('./../dist/**/*',{force: true});
});

gulp.task('views', function(){
    return gulp.src(clientPath + '/views/**/*.html').
        pipe(gulp.dest('./../dist'));
});

gulp.task('scripts', function(){
    return gulp.src('./../')
});

gulp.task('styles', function(){

});


gulp.task('build', ['scripts', 'styles', 'views']);
