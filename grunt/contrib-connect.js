module.exports = function(grunt) {

  grunt.config('connect', {
      options: {
        hostname: '*',
        base: 'build',
        livereload: true
    },
    dev: {
      options: {
        keepalive: false
      }
    },
    prod: {
      options: {
        keepalive: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
