module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['Gruntfile.js', 'grunt/*.js', 'src/js/index.js', 'src/index.html', 'src/sass/*.scss'],
      tasks: ['compass', 'copy', 'concat'],
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
