import uploadConfig from '@config/uploadConfig';
import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '../controller/CreateUserController';

const registerRouter = Router();
const createUser = new CreateUserController();

const upload = multer(uploadConfig);

registerRouter.post('/', upload.single('photo'), createUser.execute);

export default registerRouter;
