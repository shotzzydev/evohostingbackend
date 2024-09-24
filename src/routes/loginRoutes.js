import { Router } from 'express';
import loginController from '../controllers/loginController';

const router = new Router();

// router.post('/', loginController.loginPost);           // Para fazer login
router.post('/login/register', (req, res) => {
  console.log("Requisição de registro recebida:", req.body);
  // Resto do seu código
});
// router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);
// router.post('/login/register', loginController.registerPost);
// router.get('/login/logout', loginController.logoutGet);

module.exports = router;
