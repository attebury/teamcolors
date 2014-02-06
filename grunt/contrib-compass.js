module.exports = function(grunt) {

  grunt.config('compass', {
    options: {
      sassDir: 'src/sass',
      cssDir: 'css/'
    },
    dev: {                   // Target
      options: {              // Target options
        
        environment: 'development',
        outputStyle: 'expanded'
      },
      prod: {
        environment: 'production',
        outputStyle: 'compressed'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};