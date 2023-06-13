const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const deptSchema = mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    desc: {
      type: String
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    type: {
      type: String,
      default :"Active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
deptSchema.plugin(toJSON);

/**
 * @typedef Dept
 */
const Dept = mongoose.model('Dept', deptSchema);

module.exports = Dept;
