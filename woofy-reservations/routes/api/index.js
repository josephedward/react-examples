const router = require("express").Router();
const reservationRoutes = require("./reservationsAPI");
const wbstopsRoutes = require("./wbstopsAPI.js");
// const woofyUsers=require("./usersAPI.js")

// reservation routes
router.use("/reservations", reservationRoutes);
//bus routes
router.use("/wbstops", wbstopsRoutes);

//users
// router.use("/users", woofyUsers)


module.exports = router;
