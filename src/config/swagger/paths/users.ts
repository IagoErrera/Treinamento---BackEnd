import { OpenAPIV3 } from 'openapi-types';

import UserComponent from '../schemas/User';

export const usersSchema: OpenAPIV3.PathsObject = {
  '/users': {
    get: {
      summary: 'Listar usuários',
      description: 'Lista os usuários com filtro opcional no query a partir de um usuário autenticado',
      tags: ['User'],
      responses: {
        401: {
          description: 'Unauthorized',
        },
        200: {
          description: 'Users List',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  properties: UserComponent,
                },
              },
            },
          },
        },
      },
    },
  },
};

export default usersSchema;
