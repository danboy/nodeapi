import express from 'express';
import UserController from '../controllers/Users.js';

export const defineEndpoints = ({ mw, ctrlrs }) => {
  const router = express.Router();

  router.route("*").all(mw.requireContentType(/^application\/json/));

  router.route('/').get( (req, res) => {
    res.send({root: 'API root'})
  })

  router.route('/users')
    .get(UserController.index)
    .post(UserController.create);

  return router;
}
