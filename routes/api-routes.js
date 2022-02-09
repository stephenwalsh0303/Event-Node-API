// api-routes.js
// Initialize express router
let router = require("express").Router();

// Import event controller
var eventController = require("../controller/eventController");

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "success",
    message: "Welcome to our rest server",
  });
});

// event routes
router
  .route("/event")
  .post(eventController.new)

router
  .route("/search")
  .get(eventController.search)

// Export API routes
module.exports = router;
