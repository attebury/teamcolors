module.exports = function(grunt) {

  grunt.config('jshint', {
    config: {
      options: {jshintrc: '.jshintrc'},
      src: ['Gruntfile.js', 'src/js/app.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
