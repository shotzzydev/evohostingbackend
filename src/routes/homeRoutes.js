import { Router } from 'express';
import homeController from '../controllers/homeController';

const router = new Router();

router.get('/', homeController.homeGet);
router.post('/', homeController.homePost);

module.exports = router;
