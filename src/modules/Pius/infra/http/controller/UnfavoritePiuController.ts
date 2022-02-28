import { Request, Response } from 'express';

import UnfavoritePiuServicesfrom from '@modules/Pius/services/UnfavoritePiuService';

import container from '../../../../../shared/container';

export default class PostPiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const unfavoritePiu = container.resolve(UnfavoritePiuServicesfrom);

    const { piu_id } = request.body;
    const user_id = request.user.id;

    const piu = await unfavoritePiu.execute(piu_id, user_id);

    return response.json(piu);
  }
}
