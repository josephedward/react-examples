const router = require("express").Router();
const wbstopsController = require("../../controllers/wbstopsController");

// Matches with "/api/reservations"
router.route("/")
  .get(wbstopsController.findAll)
  .post(wbstopsController.create);

// Matches with "/api/reservations/:id"
router
  .route("/:id")
  .get(wbstopsController.findById)
  .put(wbstopsController.update)
  .delete(wbstopsController.remove);

module.exports = router;
