kimsufi-available-detect
=================
Node.JS script allowing to check servers are available on kimsufi.com and send a report to Slack.

## Features
- Detect which servers are available on startup
- Send any change to a configured Slack hook

## Installation
- Simply clone this depot anywhere on your server.
- Copy [config.json.exemple](https://github.com/BernardJeremy/kimsufi-available-detect/blob/master/config.json.exemple) file into a `config.json` file.
- Perform `npm install` command.
- Install a [incoming-webhooks](https://api.slack.com/incoming-webhooks) on your Slack.
- Add your link of the Slack incoming-webhooks in the `config.json` file.
- Optional (but recommended) : Install a task scheduler (like `CRON`) to run the script regularly.

## Configuration
- `link` : Link to the concerned kimsufi.com page.
- `slackHookUrl` :  Link to your Slack incoming-webhooks.
