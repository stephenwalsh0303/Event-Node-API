// EventModel.js
var mongoose = require("mongoose");
// Setup schema
var EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

// Export Event model
var Event = (module.exports = mongoose.model("Event", EventSchema));

module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
};
