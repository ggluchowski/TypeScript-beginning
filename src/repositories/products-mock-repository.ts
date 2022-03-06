import { IProduct } from '../interfaces/product.interface';
import { IProductsRepository } from './products-repository.interface';
import { nanoid } from 'nanoid';

export class ProductsMockRepository implements IProductsRepository {
  private products: Array<IProduct> = [];

  addItem(item: IProduct): IProduct {
    item.id = nanoid(6);
    item.dateCreated = new Date();
    item.dateUpdated = new Date();
    this.products.push(item);
    return item;
  }

  deleteItem(id: string): boolean {
    let index = 0;
    let i = 0;
    const length: number = this.products.length;

    for (const item of this.products) {
      if (item.id === id) {
        index = i;
        break;
      }
      i++;
    }
    this.products.splice(index, 1);

    if (this.products.length = length - 1)
    return true;

  }

  updateItem(id: string, item: IProduct): IProduct {
    this.products = this.products.map(i => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          dateCreated: i.dateCreated,
          dateUpdated: new Date()
        };
      }

      return i;
    });

    return this.getItemById(id);
  }

  getItemById(id: string): IProduct {
    return this.products.find(i => i.id === id);
  }

  getAllItems(): IProduct[] {
    return this.products;
  }

  findProductByName(name: string): IProduct {
    return this.products.find(i => i.name === name);
  }

}