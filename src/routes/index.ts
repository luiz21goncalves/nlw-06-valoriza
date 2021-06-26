import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { authenticateUser } from '../useCases/authenticateUser';
import { createCompliment } from '../useCases/createCompliment';
import { createTag } from '../useCases/createTag';
import { createUser } from '../useCases/createUser';
import { listAllTags } from '../useCases/listAllTags';
import { listAllUsers } from '../useCases/listAllUsers';
import { listUserReceiveCompliments } from '../useCases/listUserReceiveCompliments';
import { listUserSenderCompliments } from '../useCases/listUserSenderCompliments';

const routes = Router();

routes.post('/sessions', (request, response) => {
  return authenticateUser().authenticateUserController.handle(
    request,
    response
  );
});

routes.post('/users', (request, response) => {
  return createUser().createUserController.handle(request, response);
});

routes.use(ensureAuthenticated);

routes.get('/users', (request, response) => {
  return listAllUsers().listAllUsersController.handle(request, response);
});

routes.post('/tags', ensureAdmin, (request, response) => {
  return createTag().createTagController.handle(request, response);
});

routes.get('/tags', (request, response) => {
  return listAllTags().listAllTagsController.handle(request, response);
});

routes.post('/compliments', (request, response) => {
  return createCompliment().createComplimentController.handle(
    request,
    response
  );
});

routes.get('/users/compliments/send', (request, response) => {
  return listUserSenderCompliments().listUserSenderComplimentsController.handle(
    request,
    response
  );
});

routes.get('/users/compliments/receive', (request, response) => {
  return listUserReceiveCompliments().listUserReceiveComplimentsController.handle(
    request,
    response
  );
});

export { routes };
