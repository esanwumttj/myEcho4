var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
    exec(success, error, "myEcho", "echo", [arg0]);
};
window.plugins = window.plugins || {};
window.plugins.myEcho = echo;
exports.myEcho = echo;