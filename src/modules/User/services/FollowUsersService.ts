// import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  followed_id: string;
  follower_id: string;
}

@injectable()
class FollowUserServices {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute({ followed_id, follower_id }: IRequest): Promise<User> {
    const followed = await this.userRepository.findById(followed_id);
    if (!followed) throw new AppError('The id of followed was not find', 404);

    const follower = await this.userRepository.findById(follower_id);
    if (!follower) throw new AppError('The id of follower was not find', 404);

    const follower_following = follower.following
      ? JSON.parse(JSON.stringify(follower.following)) as User[]
      : [] as User[];
    follower_following.forEach((user) => {
      if (user.id === followed_id) throw new AppError('Alread is following');
    });

    const followed_followers = followed.followers
      ? JSON.parse(JSON.stringify(followed.followers)) as User[]
      : [] as User[];

    const temp_follower_following = follower_following;
    const temp_followed_followers = followed_followers;

    temp_follower_following.push(followed);
    temp_followed_followers.push(follower);

    followed.followers = JSON.parse(JSON.stringify([followed.followers, temp_followed_followers]));
    follower.following = JSON.parse(JSON.stringify([followed.following, temp_follower_following]));

    follower_following.push(followed);
    followed_followers.push(follower);

    follower.following = JSON.parse(JSON.stringify(follower_following));
    // follower.following = null;

    this.userRepository.save(follower);

    followed.followers = JSON.parse(JSON.stringify(followed_followers));
    // followed.followers = null;

    this.userRepository.save(followed);

    return follower;
  }
}

export default FollowUserServices;
