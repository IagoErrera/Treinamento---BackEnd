import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  about: string;
  photo: string;
}

@injectable()
class CreateUserServices {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    username,
    password,
    first_name,
    last_name,
    about,
    photo,
  }: IRequest): Promise<User> {
    const checkEmailExist = await this.userRepository.findByEmail(email);
    const checkUsernameExist = await this.userRepository.findByUsername(username);

    if (checkEmailExist) throw new Error('This email is already used');
    if (checkUsernameExist) throw new Error('This username is already used');

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      email,
      username,
      password: hashedPassword,
      first_name,
      last_name,
      about,
      photo,
    });

    return user;
  }
}

export default CreateUserServices;
