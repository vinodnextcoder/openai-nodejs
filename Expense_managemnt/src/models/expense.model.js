const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true },
  fare: { type: Number },
  service: { type: String },
  driven: { type: Boolean },
  miles: { type: Number },
  parkingTollsGas: { type: Number},
  hotel: { type: Number},
  meals: { type: Number },
  entertainment: { type: Number},
  client: { type: String, enum: ['Y', 'N']}
},{
    timestamps: true,
  });

// add plugin that converts mongoose to json
expenseSchema.plugin(toJSON);

/**
 * @typedef Expense
 */
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
