import { IUser } from '../interfaces/user.interface';
import { IUsersRepository } from './users-repository.interface';
import { nanoid } from 'nanoid';
import { Roles } from '../enums/roles.enum';

export class UsersMockRepository implements IUsersRepository {
  private users: Array<IUser> = [];

  addItem(item: IUser): IUser {
    item.id = nanoid(6);
    this.users.push(item);
    return item;
  }

  deleteItem(id: string): boolean {
    let index = 0;
    let i = 0;
    const length: number = this.users.length;

    for (const item of this.users) {
      if (item.id === id) {
        index = i;
        break;
      }
      i++;
    }
    this.users.splice(index, 1);

    if (this.users.length = length - 1)
      return true;
  }

  updateItem(id: string, item: IUser): IUser {
    this.users = this.users.map(i => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          position: Roles.SELLER
        };
      }

      return i;
    });

    return this.getItemById(id);
  }

  getItemById(id: string): IUser {
    return this.users.find(i => i.id === id);
  }

  getAllItems(): IUser[] {
    return this.users;
  }

  findUserByFirstName(firstName: string): Array<IUser> {
    const result = this.users.filter(i =>
      i.firstName === firstName);

    return result;
  }

}