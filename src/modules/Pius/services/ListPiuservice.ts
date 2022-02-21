import { injectable, inject } from 'tsyringe';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';

@injectable()
class ListPiusServices {
  constructor(
    @inject('PiusRepository')
    private userRepository: IPiusRepository,
  ) {}

  public async execute(): Promise<Piu[]> {
    return this.userRepository.findAll();
  }
}

export default ListPiusServices;
