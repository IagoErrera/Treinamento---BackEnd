import { getRepository, Repository } from 'typeorm';

import IPiusRepository from '@modules/Pius/repositories/IPiusRepository';
import ICreateDTO from '@modules/Pius/dtos/ICreateDTO';

import Piu from '../entities/Pius';

class PiusRepository implements IPiusRepository {
  private ormRepository: Repository<Piu>;

  constructor() {
    this.ormRepository = getRepository(Piu);
  }

  public async create(piuData: ICreateDTO): Promise<Piu> {
    const piu = this.ormRepository.create(piuData);
    await this.ormRepository.save(piu);
    // delete user.password;
    return piu;
  }

  public async save(piu: Piu): Promise<Piu> {
    await this.ormRepository.save(piu);
    return piu;
  }

  public async findById(id: string): Promise<Piu | undefined> {
    const piu = await this.ormRepository.findOne({ where: { id } });
    if (!piu) throw new Error('Piu was not find');
    return piu;
  }

  public async findAll(): Promise<Piu[]> {
    const pius = await this.ormRepository.find();
    return pius;
  }

  public async delete(piu_id: string): Promise<Piu> {
    const piu = await this.ormRepository.findOne({ where: { id: piu_id } });
    if (!piu) throw new Error('Piu was not find');
    this.ormRepository.remove(piu);
    return piu;
  }
}

export default PiusRepository;
