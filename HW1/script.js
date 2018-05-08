var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.token; //for testing replace your token with "process.env.token"
var userId = process.env.userId; //for testing replace your userId with "process.env.uderId"

// var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
var urlRoot = "https://github.ncsu.edu/api/v3";

getYourRepos(userId);
// listBranches(userId, "HW0");
// createRepo(urlRoot);
// createIssues(userId, "Hello-World");
// editRepo(urlRoot, userId, "Hello-World");
// listReactions(userId, "Hello-World", 1)

function getYourRepos(userName) {

    var options = {
        url: urlRoot + '/users/' + userName + "/repos",
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        // console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });

}

function listBranches(owner, repo) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + "/branches",
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        // console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });
}

function createRepo(url) {
    var options = {
        url: urlRoot + '/user/repos',
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": "Hello-World",
            "description": "This is your first repository",
            "homepage": url,
            "private": true,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": false
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(response);
    });

}

function createIssues(userId, repo) {
    var options = {
        url: urlRoot + '/repos/' + userId + '/' + repo + '/issues',
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "title": "Found a bug",
            "body": "I'm having a problem with this.",
            "labels": [
                "bug"
            ]
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(response);
    });
}

function editRepo(url, userId, repo) {
    var options = {
        url: urlRoot + '/repos/' + userId + '/' + repo,
        method: 'PATCH',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": "Hello-World",
            "description": "This is your first repository",
            "homepage": url,
            "private": true,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": true
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(response);
    });

}

function listReactions(owner, repo, number) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + "/issues/" + 1 + '/reactions',
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token,
            "Accept": "application/vnd.github.squirrel-girl-preview"
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        // console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].content;
            console.log(name);
        }
    });
}