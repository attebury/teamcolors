module.exports = function(grunt) {

  grunt.config('svgmin', {
    options: {                                      // Configuration that will be passed directly to SVGO
            plugins: [
              { removeViewBox: false },
              { removeUselessStrokeAndFill: false }
            ]
        },
        nfl: {                     // Target
            files: [{               // Dictionary of files
                expand: true,       // Enable dynamic expansion.
                cwd: 'src/svg/original',         // Src matches are relative to this path.
                src: ['**/*.svg'],  // Actual pattern(s) to match.
                dest: 'src/svg/minified',       // Destination path prefix.
                ext: '.svg'     // Dest filepaths will have this extension.
                // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
            }]
        }
  });

  grunt.loadNpmTasks('grunt-svgmin');

};
