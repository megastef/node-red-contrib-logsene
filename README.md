# node-red-contrib-logsene

**A [Node-Red](http://nodered.org/) wrapper for [Logsene](http://sematext.com/logsene)**

It makes your "Things" logging to the cloud. Where else, on your device is not much space!


# Introduction

The _node-red-contrib-logsene_ node makes it  easy to log directly to  Logsene by Sematext from Node-Red.
If no text is specified in "msg.log" it logs "msg.payload". In any case it adds the complete msg  object as JSON object.

# Features:

   * Drag and drop on node-red
   * Settings UI - for Logsene Token and name of the log for your app
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

6) double click on it to configure

7) Enter the Logsene App token and name the log  (e.g. iotLogger)
    - current limitation: pls. don't use special characters in it like '-'

## What can I do with it? 

1) For example you want to log from a browser or app via WebSocket to the Logsene service:

websocket -> Logsene

2) You want to track msg objects from MQTT devices

mqtt -> logsene

3) You want to log all tweets about you

twitter -> sentiment -> logsene

4) Debug Node-Red flows - log msg objects in your flow at different places

Add parallel connection to outgoing connectors, in Logsene view by timestamp how your message changed in the flow

![img](https://cloud.githubusercontent.com/assets/7289505/4992969/c0d22d42-69a8-11e4-9891-f1280a9339f5.png)
