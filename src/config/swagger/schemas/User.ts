import { OpenAPIV3 } from 'openapi-types';

const UserComponent: OpenAPIV3.ComponentsObject['schemas'] = {
  User: {
    type: 'object',
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
};

export default UserComponent;
