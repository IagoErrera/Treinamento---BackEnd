import { Request, Response } from 'express';

import FollowUserServices from '@modules/User/services/FollowUsersService';

import container from '../../../../../shared/container';

export default class FollowUserController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const followUser = container.resolve(FollowUserServices);

    const follower_id = request.body.follower_id as string;
    const followed_id = request.body.followed_id as string;

    const user = await followUser.execute({ follower_id, followed_id });
    return response.json(user);
  }
}
