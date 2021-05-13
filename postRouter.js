import Router from 'express';
import postController from './postController.js';

const postRouter = new Router();

postRouter.post('/posts', postController.create);
postRouter.get('/posts', postController.getAll);
postRouter.get('/posts/:id', postController.getOne);
postRouter.put('/posts', postController.update);
postRouter.delete('/posts/:id', postController.delete);

export default postRouter;