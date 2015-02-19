var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jasmine = require('gulp-jasmine');

gulp.task('test', function(){
    gulp.src('./tests/*.js')
        .pipe(jasmine());
});


gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext:    'js',
        env: {
            PORT:8500
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting!')
    });
});