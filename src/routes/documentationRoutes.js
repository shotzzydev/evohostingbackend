import { Router } from 'express';
import documentationController from '../controllers/documentationController';

const router = new Router();

router.get('/documentation', documentationController.documentationGet);

module.exports = router;
