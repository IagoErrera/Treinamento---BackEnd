import { Request, Response } from 'express';

import PostPiusServices from '@modules/Pius/services/PostPiuService';

import ICreateDTO from '@modules/Pius/dtos/ICreateDTO';

import container from '../../../../../shared/container';

export default class PostPiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const postPiu = container.resolve(PostPiusServices);

    const piuData: ICreateDTO = request.body;

    const user = await postPiu.execute(piuData);

    return response.json(user);
  }
}
