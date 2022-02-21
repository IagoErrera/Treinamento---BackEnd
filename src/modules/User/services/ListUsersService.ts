// import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

@injectable()
class ListUserServices {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute(filter: string): Promise<User[]> {
    const allUsers = await this.userRepository.findAll();
    const users = [] as User[];
    allUsers.forEach((user) => {
      if (user.username.includes(filter)) users.push(user);
    });

    return users;
  }
}

export default ListUserServices;
