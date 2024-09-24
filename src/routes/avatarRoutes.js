const { Router } = require('express');
const multer = require('multer');

const avatarController = require('../controllers/avatarController');
const multerConfig = require('../config/multerConfig');

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('avatar'), avatarController.store);

module.exports = router;
