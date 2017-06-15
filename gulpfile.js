var gulp=require('gulp')

var sass=require('gulp-sass')

gulp.task('sySass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./src/css'))
})


gulp.task('jtsy',function(){
	gulp.watch('./src/sass/*.scss',['sySass'])
})