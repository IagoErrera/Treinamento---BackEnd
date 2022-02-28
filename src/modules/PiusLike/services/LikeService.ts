import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPiusRepository from '@modules/Pius/repositories/IPiusRepository';

import IUsersRepository from '@modules/User/repositories/IUsersRepository';

import PiusLike from '../infra/typeorm/entities/PiusLike';
import IPiusLikeRepository from '../repositories/IPiusLikeRepository';

import ICreateDTO from '../dtos/ICreateDTO';

@injectable()
class LikePiuChangeStateServices {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
    @inject('PiusLikeRepository')
    private piusLikeRepository: IPiusLikeRepository,
  ) {}

  public async execute(piusLikeData: ICreateDTO): Promise<string> {
    const liked = await this.piusLikeRepository.wasLiked(
      piusLikeData.user_id, piusLikeData.piu_id,
    );

    const piuLike = !liked
      ? await this.piusLikeRepository.create(piusLikeData)
      : await this.piusLikeRepository.delete(liked.id);

    const user = await this.userRepository.findById(piuLike.user_id);
    if (!user) throw new AppError('User was not found!', 404);

    const piu = await this.piusRepository.findById(piuLike.piu_id);
    if (!piu) throw new AppError('User was not found!', 404);

    const userLikes: PiusLike[] = user.likes ? JSON.parse(JSON.stringify(user.likes)) : [];
    const piuLikes: PiusLike[] = piu.likes ? JSON.parse(JSON.stringify(piu.likes)) : [];

    if (liked) {
      const newUserLikes: PiusLike[] = [];
      const newPiuLikes: PiusLike[] = [];

      userLikes.forEach((like) => {
        if (like.id !== liked.id) newUserLikes.push(like);
      });
      piuLikes.forEach((like) => {
        if (like.id !== liked.id) newPiuLikes.push(like);
      });

      user.likes = JSON.parse(JSON.stringify(newUserLikes));
      piu.likes = JSON.parse(JSON.stringify(newPiuLikes));
    } else {
      userLikes.push(piuLike);
      piuLikes.push(piuLike);

      user.likes = JSON.parse(JSON.stringify(userLikes));
      piu.likes = JSON.parse(JSON.stringify(piuLikes));
    }

    this.userRepository.save(user);
    this.piusRepository.save(piu);

    return liked ? 'unlike' : 'like';
  }
}

export default LikePiuChangeStateServices;
