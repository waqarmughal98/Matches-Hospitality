const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const EventSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  team1Id: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  team2Id: {
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
  packages: [
    {
      type: String,
      required: true,
    },
  ],
}, {
  timestamps: true,
});

const Event = model('Event', EventSchema);

module.exports = Event;
