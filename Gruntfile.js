module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Register alias tasks.
  grunt.registerTask('build',
    'Build site files for testing or deployment.',
    ['clean', 'compass:dev', 'copy', 'concat', 'svgmin', 'webfont', 'svg-sprites:nfl']);

  grunt.registerTask('deploy',
    'Deploy site via gh-pages.',
    ['build', 'gh-pages']);

  grunt.registerTask('dev',
    'Start a live-reloading dev webserver on localhost.',
    ['clean:build', 'handlebars', 'compass', 'copy', 'concat', 'svgmin', 'webfont', 'svg-sprites:nfl', 'connect:dev', 'watch']);

  grunt.registerTask('prod',
    'Publish to build/wwwroot and start a webserver on localhost.',
    ['build', 'connect:prod:keepalive']);

  grunt.registerTask('default', ['dev']);

};
