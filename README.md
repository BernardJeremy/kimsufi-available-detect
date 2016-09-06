kimsufi-available-detect
=================
Node.JS script allowing to check servers are available on kimsufi.com and send a report to Slack.

## Features
- Detect if a given server is available
- Send any available server's information to a Slack hook

## Installation
- Simply clone this depot anywhere on your server.
- Copy [config.json.exemple](https://github.com/BernardJeremy/kimsufi-available-detect/blob/master/config.json.exemple) file into a `config.json` file.
- Perform `npm install` command.
- Install a [incoming-webhooks](https://api.slack.com/incoming-webhooks) on your Slack.
- Add your link of the Slack incoming-webhooks in the `config.json` file.
- Add your wanted reference in the `config.json` file.
- Optional (but recommended) : Install a task scheduler (like `CRON`) to run the script regularly.

## Configuration
- `link` : Link to the concerned kimsufi.com page (You shouldn't have to change this).
- `reference` : Reference of the server you want to track (See [map.json](https://github.com/hardware/ovh-availability/blob/master/map.json) to get the reference of your wanted model).
- `slackHookUrl` :  Link to your Slack incoming-webhooks.
