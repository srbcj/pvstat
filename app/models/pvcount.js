
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var config = require('config');

var utils = require('../../lib/utils');

var Schema = mongoose.Schema;


/**
 * Article Schema
 */

var PVcountSchema = new Schema({
  pv_baidu_ss: { type : Number },
  pv_baidu_zd: { type : Number },
  pv_baidu_bk: { type : Number },
  pv_baidu_tb: { type : Number },
  pv_tencent_news: { type : Number },
  pv_ifeng_news: { type : Number },
  pv_sohu_news: { type : Number },
  pv_sogou_ss: { type : Number },
  pv_wangyi_news: { type : Number },
  pv_tianya_bbs: { type : Number },
  pv_tianya_3g: { type : Number },
  pv_tianya_m: { type : Number },

  cn3g: { type : Number },
  pro3g: { type : Number },
  jd_products: { type : Number },
  jj_books: { type : Number },
  hupu_bbs: { type : Number },
  hupu_news: { type : Number },
  bx_details: { type : Number },
  lx_bbs: { type : Number },
  lx_chat: { type : Number },
  lx_quanzi: { type : Number },
  hq_mt: { type : Number },
  hq_wap: { type : Number },
  auho_news: { type : Number },
  lou19_news: { type : Number },
  tx_news: { type : Number },
  createdAt : {type : Date, default : Date.now}
});

/**
 * Validations
 */

// PVcountSchema.path('sites.url').required(true, 'PVCount url cannot be blank');
// PVcountSchema.path('sites.ck').required(true, 'PVCount ck cannot be blank');


/**
 * Statics
 */

PVcountSchema.statics = {

  /**
   * Find article by id
   *
   * @param {ObjectId} id
   * @param {Function} cb
   * @api private
   */

/*  load: function (id, cb) {
    this.findOne({ _id : id })
      .populate('user', 'name email username')
      .populate('comments.user')
      .exec(cb);
  },*/

  /**
   * List articles
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  list: function (options, cb) {

    this.find({})
      .sort({'createdAt': 1}) // sort by date
      .exec(cb);
  }
}

mongoose.model('PVcount', PVcountSchema);
