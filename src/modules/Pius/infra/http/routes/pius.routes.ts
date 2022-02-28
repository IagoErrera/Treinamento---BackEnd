import { Router } from 'express';
import DeletePiusController from '../controller/DeletePiusController';
import ListPiusController from '../controller/ListPiusController';
import PostPiusController from '../controller/PostPiusController';
import FavoritePiuController from '../controller/FavoritePiuController';
import UnfavoritePiuController from '../controller/UnfavoritePiuController';

const registerRouter = Router();
const deletePiu = new DeletePiusController();
const listPius = new ListPiusController();
const postPiu = new PostPiusController();
const favoritePiu = new FavoritePiuController();
const unfavoritePiu = new UnfavoritePiuController();

registerRouter.post('/', postPiu.execute);
registerRouter.get('/', listPius.execute);
registerRouter.delete('/', deletePiu.execute);
registerRouter.post('/favorite', favoritePiu.execute);
registerRouter.post('/unfavorite', unfavoritePiu.execute);

export default registerRouter;
