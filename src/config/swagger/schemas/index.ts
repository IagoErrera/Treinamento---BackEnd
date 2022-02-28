import userSchema from './User';
import piuSchema from './Piu';
import piuLikeSchema from './PiuLike';

const schema = {
  ...userSchema,
  ...piuSchema,
  ...piuLikeSchema,
};

export default schema;
