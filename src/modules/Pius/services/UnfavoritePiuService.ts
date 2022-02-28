import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

import IPiusRepository from 'modules/Pius/repositories/IPiusRepository';
import IUsersRepository from '@modules/User/repositories/IUsersRepository';

@injectable()
class FavoritePiuServices {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute(piu_id: string, user_id: string): Promise<Piu | null> {
    const piu = await this.piusRepository.findById(piu_id);

    if (!piu) throw new AppError('Piu was not find', 404);

    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User was not find', 404);

    const favoritesJSON = user.favorites;
    let favorites: Piu[] = JSON.parse(JSON.stringify(favoritesJSON));

    if (!favorites) favorites = [];

    if (favorites.includes(piu)) throw new AppError('Piu already unfavorited', 400);

    favorites.push(piu);

    user.favorites = JSON.parse(JSON.stringify(favorites));

    this.userRepository.save(user);

    return piu;
  }
}

export default FavoritePiuServices;
