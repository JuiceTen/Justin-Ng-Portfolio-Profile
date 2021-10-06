const router = require('express').Router()
const path = require('path')
const api = require('./route/')

router.use("/api", api);

if (process.env.NODE_ENV === "production") {
  router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;