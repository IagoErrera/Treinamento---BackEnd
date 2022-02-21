import { Router } from 'express';

import SessionsController from '../controller/SessionControler';

const sessionRouter = Router();
const session = new SessionsController();

sessionRouter.post('/login', session.create);

export default sessionRouter;
