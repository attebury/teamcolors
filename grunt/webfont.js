module.exports = function(grunt) {

  grunt.config('webfont', {
    nfl: {
        src: 'src/svg/bw/minified/nfl/*.svg',
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