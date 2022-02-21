import { Router } from 'express';

import usersRouter from '@modules/User/infra/http/routes/user.routes';
import registerRouter from '@modules/User/infra/http/routes/register.routes';
import sessionRouter from '@modules/User/infra/http/routes/session.routes';
import followRouter from '@modules/User/infra/http/routes/follow.routes';
import piusRouter from '@modules/Pius/infra/http/routes/pius.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/register', registerRouter);
routes.use('/session', sessionRouter);
routes.use('/follow', followRouter);
routes.use('/pius', piusRouter);

export default routes;
