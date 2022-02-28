import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';
import IUsersRepository from '@modules/User/repositories/IUsersRepository';

import ICreateDTO from '../dtos/ICreateDTO';

@injectable()
class PostPiusServices {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute(piuData: ICreateDTO): Promise<Piu | null> {
    if (piuData.text.length > 140 || piuData.text === '') throw new AppError('Invalid Piu', 400);

    const piu = await this.piusRepository.create(piuData);

    const user = await this.userRepository.findById(piu.user_id);
    if (!user) return null;
    const userPius: Piu[] = user.pius ? JSON.parse(JSON.stringify(user.pius)) : [];
    if (!userPius.includes(piu)) userPius.push(piu);
    user.pius = JSON.parse(JSON.stringify(userPius));
    this.userRepository.save(user);

    return piu;
  }
}

export default PostPiusServices;
