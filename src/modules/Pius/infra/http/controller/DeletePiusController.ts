import { Request, Response } from 'express';

import DeletePiusServices from '@modules/Pius/services/DeletePiuService';

import container from '../../../../../shared/container';

export default class DeletePiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const postPiu = container.resolve(DeletePiusServices);

    const { piu_id } = request.body;

    const user = await postPiu.execute(piu_id);

    return response.json(user);
  }
}
