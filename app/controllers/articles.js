
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var PVcount = mongoose.model('PVcount');
var utils = require('../../lib/utils');
var extend = require('util')._extend;

/**
 * List
 */

exports.index = function (req, res){
  var options = {};

    /*PVcount.create( {"createdAt":ISODate("2014-11-04T08:00:00.692Z"),
"pv_baidu_ss":2,
"pv_baidu_zd":21,
"pv_baidu_bk":21,
"pv_baidu_tb":21,
"pv_tencent_news":2,
"pv_ifeng_news":12,
"pv_sohu_news":12,
"pv_sogou_ss":12,
"pv_wangyi_news":2,
"pv_tianya_bbs":12,
"pv_tianya_3g":12,
"pv_tianya_m":2});*/

/*    PVcount.find( function (err, pvcount){
      console.log('PVcount list : ' + pvcount.length);
      if (err) return res.render('500');
      res.render('articles/index', {
        title: 'PV statistics',
        pvcount: pvcount
      });
    });
*/

  PVcount.list(options, function (err, pvcount) {
    if (err) return res.render('500');

    console.log('PVcount list : ' + pvcount.length);

    PVcount.count().exec(function (err, count) {

      console.log('PVcount  : ' + pvcount[0].createdAt);

      res.render('articles/index', {
        title: 'PV statistics',
        pvcount: pvcount
      });
    });
  });
};


