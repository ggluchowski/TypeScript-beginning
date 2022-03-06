import { IBaseRepository } from './base-repository.interface';
import { IUser } from '../interfaces/user.interface';

export interface IUsersRepository extends IBaseRepository<IUser> {
  findUserByFirstName(firstName: string): Array<IUser>;
}