import { injectable, inject } from 'tsyringe';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';
import ICreateDTO from '../dtos/ICreateDTO';

@injectable()
class PostPiusServices {
  constructor(
    @inject('PiusRepository')
    private userRepository: IPiusRepository,
  ) {}

  public async execute(piuData: ICreateDTO): Promise<Piu> {
    return this.userRepository.create(piuData);
  }
}

export default PostPiusServices;
