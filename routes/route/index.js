const router = require('express').Router();
const aws = require('./aws')

router.use('/email', aws);



module.exports = router;