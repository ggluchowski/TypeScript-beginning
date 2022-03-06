import { IBaseRepository } from './base-repository.interface';
import { IProduct } from '../interfaces/product.interface';

export interface IProductsRepository extends IBaseRepository<IProduct> {
  findProductByName(name: string): IProduct;
}