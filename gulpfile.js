var gulp=require("gulp");
var sass=require("gulp-sass");
//var connect=require("gulp-connect");
var server=require("gulp-webserver");
gulp.task('sass',function(){
    gulp.src('css/safety.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
})
gulp.task('server',['start'],function(){
    gulp.src('./')
        .pipe(server({
            open:true,
            livereload:true,
            directoryListing:true
        }))
})
gulp.task('start',function(){
    gulp.watch('./css/*.scss',['sass'])
    gulp.watch('./js/*.js',['safety'])
    gulp.watch('safety.html')
})