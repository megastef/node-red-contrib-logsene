# node-red-contrib-logsene

**A Node-Red wrapper for [Logsene](http://sematext.com/logsene)**


# Introduction

The _node-red-contrib-logsene_ node makes it  easy to log directly to  Logsene by Sematext from Node-Red.
If no message is specified it logs the complete message as JSON object.

# Features:

   * Drag and drop on node-red
   * Settings form  for Logsene Token and name of the log for your app
   * Logging to Sematext SaaS service Logsene or On-Premises edition


# Requirements

- [Get a free Logsene account](https://apps.sematext.com/users-web/register.do)
- Create a new app to create an access token

## Installation and usage

1) Change to your node-red working directory then use

	npm install node-red-contrib-logsene

2) Restart node-red
3) Open your browser (e.g. http://localhost:1880)
4) The module 'logsene' registers to node-red you can find in the storage section on the left side panel in node-red.
5) Drag the logsene module to your worksheet
5) double click on it to configure
5) Enter the Logsene App token and name the log  (e.g. iotLogger)
    - current limitation: pls. don't use special characters in it like '-'

## How to use?


Get a free account at [Sematext](http://www.sematext.com/logsene)

  * TOKEN: As supplied by Logsene, when you create a new App the token is displayed in overview.

