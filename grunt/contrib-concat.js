module.exports = function(grunt) {

	grunt.config('concat', {
		dist: {
            src: [
                'vendor/jquery/jquery.js',
                'src/js/index.js'
            ],
            dest: 'build/js/app.js',
        }
	});

	 grunt.loadNpmTasks('grunt-contrib-concat');
};