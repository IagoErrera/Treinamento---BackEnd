import { OpenAPIV3 } from 'openapi-types';

import UserComponent from '../schemas/User';

export const registerSchema: OpenAPIV3.PathsObject = {
  '/register': {
    post: {
      summary: 'Register',
      description: 'Registra um usuário',
      tags: ['User'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                id: {
                  type: 'string',
                },
                username: {
                  type: 'string',
                },
                first_name: {
                  type: 'string',
                },
                last_name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
                about: {
                  type: 'string',
                },
                photo: {
                  type: 'string',
                },
                pius: {
                  type: 'string',
                },
                likes: {
                  type: 'string',
                },
                following: {
                  type: 'string',
                },
                followers: {
                  type: 'string',
                },
                favorites: {
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
                properties: UserComponent,
              },
            },
          },
        },
      },
    },
  },
};

export default registerSchema;
