import { injectable, inject } from 'tsyringe';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';

@injectable()
class DeletePiusServices {
  constructor(
    @inject('PiusRepository')
    private userRepository: IPiusRepository,
  ) {}

  public async execute(piu_id: string): Promise<Piu> {
    return this.userRepository.delete(piu_id);
  }
}

export default DeletePiusServices;
