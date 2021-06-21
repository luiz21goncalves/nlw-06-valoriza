import { Router } from "express";

const routes = Router()

routes.get('/test', (request, response) => {
  return response.send('Hello NLW')
})

routes.post('/test-post', (request, response) => {
  return response.send('[POST] NLW Valotiza')
})

export { routes }