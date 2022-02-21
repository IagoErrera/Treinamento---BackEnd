import { Request, Response } from 'express';

import ListPiusServices from '@modules/Pius/services/ListPiuservice';

import container from '../../../../../shared/container';

export default class ListPiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const postPiu = container.resolve(ListPiusServices);

    const pius = await postPiu.execute();

    return response.json(pius);
  }
}
