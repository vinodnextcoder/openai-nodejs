const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const roleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
roleSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Roles = mongoose.model('roles', roleSchema);

module.exports = Roles;
