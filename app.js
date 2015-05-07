"use strict";
var superagent = require('superagent'),
    webhook = process.env.webhook,
    messages = [
        'Time for scrum!',
        'Scrum Master Gus says: go have standup!',
        'You know what time it is? SCRUM TIME!'
    ],
    payload = {
        username: 'Scrum Master Gus',
        icon_emoji: ":gus:",
        channel: '#dev-team',
        text: messages[Math.floor(Math.random() * messages.length)]
    };

superagent.post(webhook, payload, function (err, res) {
    if (res.status !== 200) {
        console.log('Slack returned non 200 response code', res.body);
        console.log(res.headers);
    }
});