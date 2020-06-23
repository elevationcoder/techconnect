const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc User test route
// @ access Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
