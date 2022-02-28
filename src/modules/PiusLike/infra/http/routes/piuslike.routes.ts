import { Router } from 'express';
import LikePiuChangeStateController from '../controller/LikePiuChangeStateController';

const registerRouter = Router();
const likePiu = new LikePiuChangeStateController();

registerRouter.post('/', likePiu.execute);

export default registerRouter;
