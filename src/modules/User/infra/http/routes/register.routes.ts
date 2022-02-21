import { Router } from 'express';

import CreateUserController from '../controller/CreateUserController';

const registerRouter = Router();
const createUser = new CreateUserController();

registerRouter.post('/', createUser.execute);

export default registerRouter;
