module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['Gruntfile.js', 'grunt/*.js'],
      tasks: ['jshint'],
    },
      compass: {
        files: ['src/sass/*'],
        tasks: ['compass']
      }
    // jshint: {
    //   files: ['<%= jshint.config.src %>', '<%= jshint.app.src %>'],
    //   tasks: ['jshint']
    // },
    // jade: {
    //   files: ['app/pages/*.jade', 'config/**/*'],
    //   tasks: ['jade:dev'],
    // },
    // stylus: {
    //   files: ['<%= stylus.dev.files[0].src %>'],
    //   tasks: ['stylus:dev'],
    // },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
