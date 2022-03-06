import express from 'express';
import ProductsController from '../controllers/products.controller';
import { ProductsMockRepository } from '../repositories/products-mock-repository';

const repository = new ProductsMockRepository();
const controller = new ProductsController(repository);

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

    if(!result) res.status(404).json({product: 'Not found'});
    else return res.json(result);

  } catch (error) {
    res.status(500).json(error);
  }

});

router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id;
    const result = controller.getItemById(id);

    if(!result) res.status(404).json({product: 'Not found'});
    else return res.json(controller.deleteItem(id));

  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', (req, res) => {
try {
  const id = req.params.id;
  const item = controller.getItemById(id);

  if(!item) res.status(404).json({product: 'Not found'});
    else return res.json(controller.updateItem(id, item));

} catch (error) {
  res.status(500).json(error);
}
});

router.get('/find/:name', (req, res) => {
  try {
    const name = req.params.name;
    const result = controller.findProductByName(name);

    if(!result) res.status(404).json({product: 'Not found'});
    else return res.json(result);

  } catch (error) {
    res.status(500).json(error);
  }

});

export default router;

