import { Request, Response } from 'express';

import FavoritePiuServicesfrom from '@modules/Pius/services/FavoritePiuService';

import container from '../../../../../shared/container';

export default class PostPiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const favoritePiu = container.resolve(FavoritePiuServicesfrom);

    const { piu_id } = request.body;
    const user_id = request.user.id;

    const piu = await favoritePiu.execute(piu_id, user_id);

    return response.json(piu);
  }
}
