import { container } from 'tsyringe';

import IUsersRepository from '@modules/User/repositories/IUsersRepository';
import UsersRepository from '@modules/User/infra/typeorm/repositories/UsersRepository';

import PiusRepository from '@modules/Pius/infra/typeorm/repositories/PiusRepository';
import IPiusRepository from '@modules/Pius/repositories/IPiusRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPiusRepository>(
  'PiusRepository',
  PiusRepository,
);

export default container;
