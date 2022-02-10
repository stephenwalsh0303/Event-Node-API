// EventModel.js
var mongoose = require("mongoose");
// Setup schema
var EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: { type: String },
    coordinates: []
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

EventSchema.index({ location: "2dsphere" });

// Export Event model
var Event = (module.exports = mongoose.model("Event", EventSchema));

module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
};
