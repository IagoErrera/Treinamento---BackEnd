import { Router } from 'express';

import ListUserController from '../controller/ListUsersController';

const usersRouter = Router();
const userList = new ListUserController();

usersRouter.get('/', userList.execute);

export default usersRouter;
