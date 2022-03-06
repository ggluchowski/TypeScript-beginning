import { IProductsRepository } from '../repositories/products-repository.interface';
import { IProduct } from '../interfaces/product.interface';
import BaseController from './base-controller';

class ProductsController extends BaseController<IProduct> {
  constructor(private productsRepository: IProductsRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): IProduct {
    return this.productsRepository.findProductByName(name);
  }
}

export default ProductsController;