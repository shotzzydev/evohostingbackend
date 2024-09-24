const { Router } = require('express');
const { loginRequired } = require('../middlewares/middleware');
const appController = require('../controllers/appController');

const router = Router();

router.get('/app', loginRequired, appController.appGet);
router.put('/app/:appid/start', loginRequired, appController.appStartPost);
router.delete('/app/:appid/stop', loginRequired, appController.appStopPost);
router.put('/app/:appid/restart', loginRequired, appController.appRestartPost);
router.post('/app/:appid/commit', loginRequired, appController.appCommitPost);
router.post('/app/:appid/backups', loginRequired, appController.appCommitPost);
// router.get('/app/:appid/delete', loginRequired, appController.appDeleteGet);

module.exports = router;
