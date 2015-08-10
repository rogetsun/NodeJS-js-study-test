/**
 * Created by uv2sun on 15/7/31.
 */
var log = require('uvlog');
var conn = require('./connect')();
var seq = require('./sequence');
//
//seq.run(conn, 'seq1', 100000);
//seq.run(conn, 'seq2', 100000);
seq.run(conn, 'seq3', 10000);
