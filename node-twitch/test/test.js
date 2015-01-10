"use strict";

var Twitch = require("../twitch.js")
var should = require("should");
var config = require("../../secret")

describe("makeRequest", function() {
    it("should make an empty request to the twitch api", function(done) {
        var twitch = new Twitch({key: "", secret: ""});
        twitch.makeRequest("https://api.twitch.tv/kraken", function(error, body) {
            should.exist(body._links.user);
            should.exist(body._links.channel);
            should.exist(body._links.search);
            should.exist(body._links.streams);
            should.exist(body._links.ingests);
            should.exist(body._links.teams);
            should.exist(body._links);
            body.token.valid.should.equal(false);
            should.not.exist(body.token.authorization);
            done();
        }, false);
    });
});

/*describe("getSubscribers", function() {
    var twitch = new Twitch()
    it("should get the subscribers from the twitch api based on the " +
       "provided channel", function(done) {
        var twitch = new Twitch({key: "", secret: ""});
        twitch.getSubscribers("cobaltstreak", function(error, body) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(body);
                should.not.exist(body.error);
                done();
            }
        })
    });
});*/