module.exports = function(grunt) {

  grunt.config('webfont', {
    nfl: {
        src: 'src/svg/minified/nfl/*.svg',
        dest: 'build/fonts',
          //engine: 'node',
        descCss: 'css',
        options: {
          htmlDemo: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

};