
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
// var Article = mongoose.model('Article')
var PVcount = mongoose.model('PVcount');
var utils = require('../../lib/utils');
var extend = require('util')._extend;

/**
 * List
 */

exports.index = function (req, res){
  var options = {};

    PVcount.find( function (err, pvcount){
      console.log('PVcount list : ' + pvcount.length);
      if (err) return res.render('500');
      res.render('articles/index', {
        title: 'PV statistics',
        pvcount: pvcount
      });
    });


/*  PVcount.list(options, function (err, pvcount) {
    if (err) return res.render('500');

    console.log('PVcount list : ' + pvcount.length);

    PVcount.count().exec(function (err, count) {

      console.log('PVcount count : ' + count);

      res.render('articles/index', {
        title: 'PV statistics',
        pvcount: pvcount
      });
    });
  });*/
};


