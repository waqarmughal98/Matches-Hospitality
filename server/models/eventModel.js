const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const EventSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  team1: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  packages: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active', 
  },
}, {
  timestamps: true,
});

const Event = model('Event', EventSchema);

module.exports = Event;
