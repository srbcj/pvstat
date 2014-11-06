
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

    /*PVcount.create( {"createdAt": ISODate("2014-10-28T08:37:30.692Z"),
      "sites": [{"url":"pv_baidu_ss", "ck": 2},
      {"url":"pv_baidu_zd", "ck": 2},
      {"url":"pv_baidu_bk", "ck": 2},
      {"url":"pv_baidu_tb", "ck": 2},
      {"url":"pv_tencent_news", "ck": 2},
      {"url":"pv_ifeng_news", "ck": 2},
      {"url":"pv_sohu_news", "ck": 2},
      {"url":"pv_sogou_ss", "ck": 2},
      {"url":"pv_wangyi_news", "ck": 2},
      {"url":"pv_tianya_bbs", "ck": 2},
      {"url":"pv_tianya_3g", "ck": 2},
      {"url":"pv_tianya_m", "ck": 2}
      ]}, function (err, small) {
      if (err) return console.log(err);
    });*/

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


