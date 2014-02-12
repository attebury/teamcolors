module.exports = function(grunt) {

	grunt.config('handlebars', {
		compile: {
            options: {
              namespace: "JST"
            },
            files: {
              "src/js/handlebars-templates.js": "src/templates/*.hbs"
            }
          }
	});

	 grunt.loadNpmTasks('grunt-contrib-handlebars');
};