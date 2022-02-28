import usersPaths from './users';
import loginSchema from './login';
import registerSchema from './register';
import followSchema from './follow';
import piusSchema from './pius';

const paths = {
  ...usersPaths,
  ...loginSchema,
  ...registerSchema,
  ...followSchema,
  ...piusSchema,
};

export default paths;
