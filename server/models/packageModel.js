const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  matchTicket: {
    type: Boolean,
    default: false,
  },
  externalFlight: {
    type: Boolean,
    default: false,
  },
  hotelAccommodation: {
    type: Boolean,
    default: false,
  },
  groundTransportation: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["active", "deactive"],
    default: "active",
  }
}, {
  timestamps: true,
});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;
