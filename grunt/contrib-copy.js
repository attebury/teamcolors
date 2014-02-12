module.exports = function(grunt) {

	grunt.config('copy', {
		main: {
            //src: 'src/js/modernizr.custom.36591.js',
            //dest: 'build/js/modernizr.js',
            files: [
                { src: ['src/js/modernizr.custom.36591.js' ], dest: 'build/js/modernizr.js' },
                { src: 'src/index.html', dest: 'build/index.html' },
                { src: 'src/json/teams.json', dest: 'build/json/teams.json'},
                { src: 'css/style.css', dest: 'build/css/style.css' }
            ]
        },
	});

	 grunt.loadNpmTasks('grunt-contrib-copy');
};