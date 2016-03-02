//here we will create tasks for gulp
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles =['*.js', 'src/views/*.js',' public/js/*.js'];

gulp.task('serve', function(){
	var options={
		script: 'server.js',
		delayTime:1,
		env:{
			'PORT': 3000					//need to change it if give errors

		},
		watch : jsFiles                   //will look these files for change and restart again
	};

	return nodemon(options)
			.on('restart', function(ev){

				console.log('Restarting....');
			});

});



