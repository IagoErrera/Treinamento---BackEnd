import { OpenAPIV3 } from 'openapi-types';

import UserComponent from '../schemas/User';

export const followSchema: OpenAPIV3.PathsObject = {
  '/follow': {
    post: {
      summary: 'Seguir usuário',
      description: 'Segue um usuário, adicionando à propriedade following, a partir de um usuário autenticado',
      tags: ['User'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                followed_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        404: {
          description: 'Not found',
        },
        400: {
          description: 'Bad request',
        },
        200: {
          description: 'User',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: UserComponent,
              },
            },
          },
        },
      },
    },
  },
};

export default followSchema;
