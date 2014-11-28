/**
 * Module dependencies.
 */

var p = require('procstreams');
var exec = require('child_process').exec;


/**
 *
 */

exports.dowc = function () {
    p('cat package.json').pipe('wc -l').data(function (stdout, stderr) {
        console.log(stdout);
    }
});


// setInterval(function () {
//     exec("ps aux| grep 'tomcat6' | grep -v grep | sed -n  '1P' | awk '{print $2}'", function (err, output) {
//         if (err) throw err;
//         if (output.length > 0) console.log('exist,don\'t need restart');
//         else exec('sudo /etc/init.d/tomcat6 restart', function (err2, out2) {});
//     })
// }, 1000 * 60 * 2);

