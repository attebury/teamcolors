$(function() {
    init = function () {
        dataService.getTeams()
            .done(function (data) {
                console.info(data);
                go();
                $('#many').append(data.leagues.teams.length);
            })
            .fail(function () {
                console.log("failed");
            });
    },

    go = function () {
        console.log("gone");
    }

    init();

});