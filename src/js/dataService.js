var dataService = function() {
    "use strict";

    var serviceBase = '/json/teams.json',

        getTeams = function (params) {
             return $.getJSON(serviceBase, params);
        };

    return {
        getTeams: getTeams
    };
} ();