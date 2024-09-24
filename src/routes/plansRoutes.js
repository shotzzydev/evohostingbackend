import { Router } from'express';
import plansController from'../controllers/plansController';

const router = new Router();

router.get('/plans', plansController.plansGet);

module.exports = router;
