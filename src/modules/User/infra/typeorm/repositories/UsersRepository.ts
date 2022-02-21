import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/User/repositories/IUsersRepository';
import ICreateDTO from '@modules/User/dtos/ICreateDTO';

import User from '@modules/User/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: ICreateDTO): Promise<User> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    // delete user.password;
    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { email } });
    return user;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { username } });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { id } });
    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }
}

export default UsersRepository;
