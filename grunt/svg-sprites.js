module.exports = function(grunt) {

  grunt.config('svg-sprites', {
    options: {
        spriteElementPath: "src/svg/minified",
        spritePath: "build/css/sprites",
        cssPath: "build/css"
        // more options
    },
    nfl: {
        // more options
        options: {

                prefix: 'testsizes',
                sizes: {
                    large: 4,
                    med: 2,
                    small: 1
                },
                refSize: 32,
                unit: 16
            }
    }
  });

  grunt.loadNpmTasks('dr-grunt-svg-sprites');

};