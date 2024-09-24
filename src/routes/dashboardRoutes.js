import { Router } from 'express';
import { loginRequired } from '../middlewares/middleware';
import dashboardController from '../controllers/dashboardController';
import uploadController from '../controllers/uploadController';

const router = new Router();

router.get('/dashboard', loginRequired, dashboardController.dashboardGet);
router.get('/dashboard/upload', loginRequired, uploadController.uploadGet);

module.exports = router;
