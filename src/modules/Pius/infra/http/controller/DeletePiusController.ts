import { Request, Response } from 'express';

import DeletePiusServices from '@modules/Pius/services/DeletePiuService';

import container from '../../../../../shared/container';

export default class DeletePiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const deletePiu = container.resolve(DeletePiusServices);

    const { piu_id } = request.body;
    const user_id = request.user.id;
    const user = await deletePiu.execute(piu_id, user_id);

    return response.json(user);
  }
}
