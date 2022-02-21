import { Router } from 'express';
import DeletePiusController from '../controller/DeletePiusController';
import ListPiusController from '../controller/ListPiusController';
import PostPiusController from '../controller/PostPiusController';

const registerRouter = Router();
const deletePiu = new DeletePiusController();
const listPius = new ListPiusController();
const postPiu = new PostPiusController();

registerRouter.post('/', postPiu.execute);
registerRouter.get('/', listPius.execute);
registerRouter.delete('/', deletePiu.execute);

export default registerRouter;
