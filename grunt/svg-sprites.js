module.exports = function(grunt) {

  grunt.config('svg-sprites', {
    options: {
        spriteElementPath: "src/svg/color/minified",
        spritePath: "build/css/sprites",
        cssPath: "build/css"
        // more options
    },
    nfl: {
        // more options
        options: {

                prefix: 'tc',
                sizes: {
                    xl: 16,
                    large: 8,
                    med: 4,
                    small: 1
                },
                refSize: 32,
                unit: 16
            }
    }
  });

  grunt.loadNpmTasks('dr-grunt-svg-sprites');

};