module.exports = function(grunt) {

  grunt.config('gh-pages', {
    site: {
      options: {
        base: 'build/',
        branch: 'gh-pages'
      },
      src: ['**/*'],
    },
  });

  grunt.loadNpmTasks('grunt-gh-pages');

};
