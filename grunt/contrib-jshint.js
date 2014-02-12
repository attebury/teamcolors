module.exports = function(grunt) {

  grunt.config('jshint', {
    config: {
      options: {jshintrc: '.jshintrc'},
      src: ['Gruntfile.js', 'src/js/index.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
