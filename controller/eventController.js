Event = require("../model/eventModel");

exports.search = function (req, res) {
  const param = req.body;
  Event.find({longitude: param.longitude, latitude: param.latitude}, function(err, data) {
    if(err) {
      res.json({
        status: "error",
        message: "error occur"
      });
    }
    res.json({
      status: "success",
      message: "events searched successfully",
      data: data,
    });
  });
};

exports.new = function (req, res) {
  var event = new Event();
  event.name = req.body.name ? req.body.name : event.name;
  event.created = req.body.created;
  event.longitude = req.body.longitude;
  event.latitude = req.body.latitude;

  event.save(function (err) {
    res.json({
      message: "New event created!",
      data: event,
    });
  });
};