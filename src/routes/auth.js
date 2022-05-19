import { Router } from 'express';
import controller from '../controller';
const router = Router();

router.get('/2fa', (req, res) => {
  controller.generateHexdigits(req, res);
});

export default router;
