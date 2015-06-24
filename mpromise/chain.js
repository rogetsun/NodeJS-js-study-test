/**
 * Created by uv2sun on 15/6/18.
 */

var Promise = require('mpromise');

function makeMeAPromise(i) {
    console.log(i);
    var p = new Promise;
    p.fulfill(i);
    return p;
}

var returnPromise = initialPromise = new Promise;
for (var i = 0; i < 10; ++i)
    returnPromise = returnPromise.chain(makeMeAPromise(i));

initialPromise.fulfill();

returnPromise.then(function () {
    console.log(arguments);
});