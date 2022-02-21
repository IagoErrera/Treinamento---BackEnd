import { Router } from 'express';

import FollowUserController from '../controller/FollowUsersController';

const followRouter = Router();
const followUser = new FollowUserController();

followRouter.post('/', followUser.execute);

export default followRouter;
