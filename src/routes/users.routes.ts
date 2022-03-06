import express from 'express';
import UsersController from '../controllers/users.controller';
import { UsersMockRepository } from '../repositories/users-mock-repository';

const repository = new UsersMockRepository();
const controller = new UsersController(repository);

const router = express.Router();

router.post('', (req, res) => {
  try {
    return res.json(controller.addItem(req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('', (_, res) => {
  return res.json(controller.getAllItems());
});

router.get('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const result = controller.getItemById(id);

    if (!result) res.status(404).json({ user: 'Not found' });
    else return res.json(result);

  } catch (error) {
    res.status(500).json(error);
  }

});

router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const result = controller.getItemById(id);

    if (!result) res.status(404).json({ user: 'Not found' });
    else return res.json(controller.deleteItem(id));

  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const item = controller.getItemById(id);

    if (!item) res.status(404).json({ user: 'Not found' });
    else return res.json(controller.updateItem(id, item));

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/find/:firstName', (req, res) => {
  try {
    const firstName = req.params.firstName;
    const result = controller.findUserByFirstName(firstName);

    if(!result) res.status(404).json({user: 'Not found'});
    else return res.json(result);

  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;