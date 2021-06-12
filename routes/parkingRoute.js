const router = require('express').Router();

const activityController = require('../controllers/activityController')

router.post('/parking', activityController.createActivity)
router.put('/parking', activityController.updateActivity)


module.exports = router;
