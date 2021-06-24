import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { authenticateUser } from '../useCases/authenticateUser';
import { createCompliment } from '../useCases/createCompliment';
import { createTag } from '../useCases/createTag';
import { createUser } from '../useCases/createUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUser().createUserController.handle(request, response);
});

routes.post('/tags', ensureAdmin, (request, response) => {
  return createTag().createTagController.handle(request, response);
});

routes.post('/sessions', (request, response) => {
  return authenticateUser().authenticateUserController.handle(
    request,
    response
  );
});

routes.post('/compliments', (request, response) => {
  return createCompliment().createComplimentController.handle(
    request,
    response
  );
});

export { routes };
