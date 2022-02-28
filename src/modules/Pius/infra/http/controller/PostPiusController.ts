import { Request, Response } from 'express';

import PostPiusServices from '@modules/Pius/services/PostPiuService';

import container from '../../../../../shared/container';

export default class PostPiusController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const postPiu = container.resolve(PostPiusServices);

    const { text } = request.body;
    const user_id = request.user.id;

    const user = await postPiu.execute({ text, user_id });

    return response.json(user);
  }
}
