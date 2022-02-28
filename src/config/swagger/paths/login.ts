import { OpenAPIV3 } from 'openapi-types';

import UserComponent from '../schemas/User';

export const loginSchema: OpenAPIV3.PathsObject = {
  '/session/login': {
    post: {
      summary: 'Login',
      description: 'Loga com um usuário, gerando um token de autorização JWT',
      tags: ['User'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        400: {
          description: 'Bad Request',
        },
        200: {
          description: 'User',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  ...UserComponent,
                  token: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default loginSchema;
