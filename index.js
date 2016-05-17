var request = require('request');
var fs = require('fs');
var Slack = require('slack-node');

var link = require('./config.json').link;
var slackUrl = require('./config.json').slackHookUrl;
var wantedReference = require('./config.json').reference;

request(link, function (err, resp, html) {
  if (err) {
    return console.error(err);
  }

  var text = '';
  var availabilityObj = JSON.parse(html);
  availability = availabilityObj.answer.availability;

  for (var server of availability) {
    if (wantedReference == server.reference) {
      for (var zone of server.metaZones) {
        if (zone.availability != 'unavailable' && zone.availability != 'unknown') {
          text += 'Server <' + server.reference + '> available in zone <' + zone.zone + '> !\n';
        }
      }
    }
  }

  if (text !== '') {

    text += '\n<https://www.kimsufi.com/en/servers.xml>';
    var msgParameters = {
      username: 'kimsufi-detect',
      text: text,
    };

    var slack = new Slack();
    slack.setWebhook(slackUrl);
    slack.webhook(msgParameters, function (err, response) {
      if (response.statusCode != 200) {
        console.log(response);
      }
    });
  }
});
