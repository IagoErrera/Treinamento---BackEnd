import { Router } from 'express';

import usersRouter from '@modules/User/infra/http/routes/user.routes';
import registerRouter from '@modules/User/infra/http/routes/register.routes';
import sessionRouter from '@modules/User/infra/http/routes/session.routes';
import followRouter from '@modules/User/infra/http/routes/follow.routes';
import piusRouter from '@modules/Pius/infra/http/routes/pius.routes';
import piusLikeRouter from '@modules/PiusLike/infra/http/routes/piuslike.routes';

import ensureAuthenticated from '../middleware/ensureAuthenticated';

const routes = Router();

routes.use('/users', ensureAuthenticated, usersRouter);
routes.use('/register', registerRouter);
routes.use('/session', sessionRouter);
routes.use('/follow', ensureAuthenticated, followRouter);
routes.use('/pius', ensureAuthenticated, piusRouter);
routes.use('/pius/like', ensureAuthenticated, piusLikeRouter);

export default routes;
