import { Router } from 'express';

import { createUser } from '../useCases/createUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUser().createUserController.handle(request, response);
});

export { routes };
