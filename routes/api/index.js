const router = require('express').Router()
const emailRoute = require('./email')

router.use('/email', emailRoute);

module.exports = router;