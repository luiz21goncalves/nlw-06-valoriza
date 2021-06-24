import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { createTag } from '../useCases/createTag';
import { createUser } from '../useCases/createUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUser().createUserController.handle(request, response);
});

routes.post('/tags', ensureAdmin, (request, response) => {
  return createTag().createTagController.handle(request, response);
});

export { routes };
