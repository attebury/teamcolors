module.exports = function(grunt) {

  grunt.config('clean', {
    build: {
    	src: ['build']
    },
    svg: {
    	src: [ 'src/minified/**/*.svg' ]
    },
    scripts: {
    	src: [ 'build/**/*.js', '!build/application.js' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

};