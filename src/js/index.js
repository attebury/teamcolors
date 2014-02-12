console.log('index');

$(function() {
    init = function () {
        dataService.getTeams()
            .done(function (data) {
                console.info(data);
                go(data);
                //$('#many').html(data.leagues.teams[0].team.city);
            })
            .fail(function () {
                console.log("failed");
            });
    },

    go = function (data) {
        console.log("gone");
        console.info(data);
        $('#many').html(data.leagues[0].teams[0].team.city);
        //console.log(data.leagues[0].teams[0].team.city + " " + data.leagues[0].teams[0].team.name);
        var teamClassName = data.leagues[0].teams[0].team;
        //console.log(teamClassName.toLowerCase());
        console.log(data.leagues[0].league);

        // $.each(data.leagues[0].teams[0].colors, function(x) {
        // 	console.log(this.colors[x]);
        // });

        var teamColors = data.leagues[0].teams[0].colors;

        function logArrayElements(element, index, array) {
		    console.log("a[" + index + "] = " + element);
		}
		teamColors.forEach(logArrayElements);

		var nflTeams = data.leagues[0].teams;
		console.info(nflTeams);

		function getTeams(element, index, array) {
			console.log(element.team);
		}

		nflTeams.forEach(getTeams);

		var source   = $("#team-template").html();
		var template = Handlebars.compile(source);
		//var context = {teamclass: "dallas-cowboys", team: "America"};
		var teams = data.leagues[0].teams;
		var context = {objects: teams};
		console.log('contexts');
		console.info(context);
			$('#teams').html(template(context));
			//$("#content-placeholder").html(template(data));
    };

    Handlebars.registerHelper('teamCSS', function(person) {
	  return team.toLowerCase();
	});

	Handlebars.registerHelper('tolower', function(options) {
	    return options.fn(this).replace(/ /g, '-').toLowerCase();
	});

    init();

});