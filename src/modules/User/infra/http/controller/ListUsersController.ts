import { Request, Response } from 'express';

import ListUsersService from '@modules/User/services/ListUsersService';

import container from '../../../../../shared/container';

export default class ListUserController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const filter = request.query.username as string;

    const users = await listUsers.execute(filter);
    return response.json(users);
  }
}
