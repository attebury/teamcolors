$(function() {
	var init = function () {

		dataService.getTeams()
			.done(function (data) {
				go(data);
			})
			.fail(function () {
			});
	},

	go = function (data) {
        var teamClassName = data.leagues[0].teams[0].team,
			teamColors = data.leagues[0].teams[0].colors,
			nflTeams = data.leagues[0].teams,
			source   = $("#team-template").html(),
			template = Handlebars.compile(source),
			teams = data.leagues[0].teams,
			context = {objects: teams};

			$('#teams').html(template(context));
	};

	Handlebars.registerHelper('tolower', function(options) {
		return options.fn(this).replace(/ /g, '-').toLowerCase();
	});

	init();

});