import { container } from 'tsyringe';

import IUsersRepository from '@modules/User/repositories/IUsersRepository';
import UsersRepository from '@modules/User/infra/typeorm/repositories/UsersRepository';

import PiusRepository from '@modules/Pius/infra/typeorm/repositories/PiusRepository';
import IPiusRepository from '@modules/Pius/repositories/IPiusRepository';

import PiusLikeRepository from '@modules/PiusLike/infra/typeorm/repositories/PiusLikeRepository';
import IPiusLikeRepository from '@modules/PiusLike/repositories/IPiusLikeRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPiusRepository>(
  'PiusRepository',
  PiusRepository,
);

container.registerSingleton<IPiusLikeRepository>(
  'PiusLikeRepository',
  PiusLikeRepository,
);

export default container;
