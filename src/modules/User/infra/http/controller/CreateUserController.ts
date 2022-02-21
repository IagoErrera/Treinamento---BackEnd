import { Request, Response } from 'express';

import CreateUserService from '@modules/User/services/CreateUserService';

import ICreateDTO from '@modules/User/dtos/ICreateDTO';

import container from '../../../../../shared/container';

export default class ListUserController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);

    const userData: ICreateDTO = request.body;

    const user = await createUser.execute(userData);

    return response.json(user);
  }
}
