import { getRepository, Repository } from 'typeorm';

import IPiusLikeRepository from '@modules/PiusLike/repositories/IPiusLikeRepository';
import ICreateDTO from '@modules/PiusLike/dtos/ICreateDTO';

import PiusLike from '../entities/PiusLike';

class PiusLikeRepository implements IPiusLikeRepository {
  private ormRepository: Repository<PiusLike>;

  constructor() {
    this.ormRepository = getRepository(PiusLike);
  }

  public async create(piusLikeData: ICreateDTO): Promise<PiusLike> {
    const piusLike = this.ormRepository.create(piusLikeData);
    await this.ormRepository.save(piusLike);

    return piusLike;
  }

  public async save(piuLike: PiusLike): Promise<PiusLike> {
    await this.ormRepository.save(piuLike);
    return piuLike;
  }

  public async wasLiked(user_id: string, piu_id: string): Promise<PiusLike | null> {
    const piuLike = await this.ormRepository.findOne({ where: { user_id, piu_id } });
    if (!piuLike) return null;
    return piuLike;
  }

  public async findAll(): Promise<PiusLike[]> {
    const piusLikes = await this.ormRepository.find();
    return piusLikes;
  }

  public async delete(piuLike_id: string): Promise<PiusLike> {
    const piuLike = await this.ormRepository.findOne({ where: { id: piuLike_id } });
    if (!piuLike) throw new Error('PiuLike was not find');
    this.ormRepository.remove(piuLike);
    return piuLike;
  }
}

export default PiusLikeRepository;
