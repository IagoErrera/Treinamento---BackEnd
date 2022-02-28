import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';

@injectable()
class DeletePiusServices {
  constructor(
    @inject('PiusRepository')
    private userRepository: IPiusRepository,
  ) {}

  public async execute(piu_id: string, user_id: string): Promise<Piu> {
    const piu = await this.userRepository.findById(piu_id);
    if (!piu) throw new AppError('Piu was not find', 404);
    if (piu.user_id !== user_id) throw new AppError('This piu belongs to other user', 403);
    return this.userRepository.delete(piu_id);
  }
}

export default DeletePiusServices;
