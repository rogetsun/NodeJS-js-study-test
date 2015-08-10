/**
 * Created by uv2sun on 15/7/31.
 */

var getSeq = function (connection, name) {

    connection.query("select nextval('hehe') seq", function (err, res, fields) {
        connection.query("insert into seq values(?, ?)", [name, res[0].seq], function (err, res) {
        });
    });
};
var run = function (connection, name,n) {
    console.log('%s begin %s' , name, Date.now());
    var i ;
    for(i = 0; i < n ; i ++ ) {
        getSeq(connection, name);
    }
    console.log('%s end %s' , name, Date.now());

};

exports.run = run;
//
//setTimeout(function () {
//    connection.end();
//    connection.destroy();
//},2000);