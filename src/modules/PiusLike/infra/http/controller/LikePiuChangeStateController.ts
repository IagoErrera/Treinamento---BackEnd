import { Request, Response } from 'express';

import LikePiuChangeStateServices from '@modules/PiusLike/services/LikeService';

import container from '../../../../../shared/container';

export default class LikePiuChangeStateController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const likePiu = container.resolve(LikePiuChangeStateServices);

    const { piu_id } = request.body;
    const user_id = request.user.id;

    const state = await likePiu.execute({ piu_id, user_id });

    return response.json({ operation: state });
  }
}
