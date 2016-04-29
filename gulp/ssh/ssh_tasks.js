'use strict';

var GulpSSH = require('gulp-ssh');

module.exports = function (gulp) {

    return function()
    {

        try {
            var config = require('./test-settings')
        } catch (e) {
            console.log(e);
            process.exit();
        }

        var ssh = new GulpSSH({
            ignoreErrors: false,
            sshConfig: config
        });

        return ssh.exec('echo ok').on('ssh2Data', function(chunck) {
            console.log(chunck.toString());
        });
    }
};