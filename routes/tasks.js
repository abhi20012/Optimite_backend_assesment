const express = require('express');
const router = express.Router();
const passport = require('passport');
const taskController = require('../controller/task_controller');

router.post('/create', taskController.create);
router.get('/destroy/:id', passport.checkAuthentication ,taskController.destroy);
router.get('/edit/:id', passport.checkAuthentication, taskController.edit);
router.post('/update/:id', taskController.update);
router.post('toggle/:id', taskController.toggle);

module.exports = router;