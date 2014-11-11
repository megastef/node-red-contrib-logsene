module.exports = function (RED) {
    var logsene = require("node-spm");


    function LogseneNode(config) {
        RED.nodes.createNode(this, config);
        this.server = RED.nodes.getNode(config.server);
        var log = new logsene (
            //port: this.server.port,
            //host: this.server.host,
            {logsene: this.server.token, spm:'-'}
        , 0)
        console.log (this.server.token)
        console.log (this)

        this.on('input', function (msg) {
            //console.log (msg)
            log.log( msg.logLevel || this.server.logname, [msg.logLevel || this.server.logname] , msg.payload, msg);
            //for debug: console.log('logsene:' + JSON.stringify(msg));
        });
        this.on("close", function () {
            try {
                log.log(this.logname, [this.logname] , 'close');
            } catch (error) {
                console.log (error)
            }
        });
    }

    RED.nodes.registerType("logsene", LogseneNode);

    function RemoteServerNode(config) {
        RED.nodes.createNode(this, config);
        //this.host = config.host;
        //this.port = config.port;
        this.token = config.token;
        this.logname = config.logname;
    }

    RED.nodes.registerType("logsene-saas", RemoteServerNode);
}
