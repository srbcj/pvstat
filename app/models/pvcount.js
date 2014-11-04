
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
  sites: [{
    url: { type : String, default : '' },
    ck: { type : Number }
  }],
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
