import { OpenAPIV3 } from 'openapi-types';

const PiuLikeComponent: OpenAPIV3.ComponentsObject['schemas'] = {
  PiuLike: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
      piu_id: {
        type: 'string',
      },
    },
  },
};

export default PiuLikeComponent;
