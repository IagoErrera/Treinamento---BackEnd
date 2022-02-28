import { OpenAPIV3 } from 'openapi-types';

import PiuComponent from '../schemas/Piu';

export const piusSchema: OpenAPIV3.PathsObject = {
  '/pius': {
    get: {
      summary: 'Lista todos os pius',
      description: 'Lista todos os pius, a partir de um usuário autenticado',
      tags: ['Piu'],
      responses: {
        401: {
          description: 'Unauthorized',
        },
        200: {
          description: 'Pius',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  properties: PiuComponent,
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: 'Postar piu',
      description: 'Posta um piu, com texto não nulo e não maior que 140 caracteres, a partir de um usuário autenticado',
      tags: ['Piu'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                text: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        401: {
          description: 'Unauthorized',
        },
        200: {
          description: 'Piu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: PiuComponent,
              },
            },
          },
        },
      },
    },
    delete: {
      summary: 'Deleta piu',
      description: 'Deleta um piu, a partir de um usuário autenticado',
      tags: ['Piu'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                piu_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        401: {
          description: 'Unauthorized',
        },
        404: {
          description: 'Not found',
        },
        403: {
          description: 'Unauthorized',
        },
        200: {
          description: 'Piu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: PiuComponent,
              },
            },
          },
        },
      },
    },
  },
  '/pius/favorite': {
    post: {
      summary: 'Favorita piu',
      description: 'Favorita um piu, ainda não favoritado, a partir de um usuário autenticado',
      tags: ['Piu'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                piu_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        404: {
          description: 'Not found',
        },
        200: {
          description: 'Piu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: PiuComponent,
              },
            },
          },
        },
      },
    },
  },
  '/pius/unfavorite': {
    post: {
      summary: 'Desfavorita piu',
      description: 'Desavorita um piu, já favoritado, a partir de um usuário autenticado',
      tags: ['Piu'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                piu_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        404: {
          description: 'Not found',
        },
        200: {
          description: 'Piu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: PiuComponent,
              },
            },
          },
        },
      },
    },
  },
  '/pius/like': {
    post: {
      summary: 'Like/Unlike',
      description: 'Dá like, adicionando-o à propriedade likes, caso não tenha dado like, ou reverte caso contrário, a partir de um usuário autenticado',
      tags: ['Piu'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                piu_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        401: {
          description: 'Unauthorized',
        },
        404: {
          description: 'Not found',
        },
        200: {
          description: 'Piu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  operation: {
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

export default piusSchema;
