import { IUsersRepository } from '../repositories/users-repository.interface';
import { IUser } from '../interfaces/user.interface';
import BaseController from './base-controller';

class UsersController extends BaseController<IUser> {
  constructor(private usersRepository: IUsersRepository) {
    super(usersRepository);
  }

  findUserByFirstName(firstName: string): Array<IUser> {
    return this.usersRepository.findUserByFirstName(firstName);
  }
}

export default UsersController;