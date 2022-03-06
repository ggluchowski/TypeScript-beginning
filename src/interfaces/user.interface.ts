import { Roles } from '../enums/roles.enum';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  address: Array<IUserAddress>;
  position: Roles;
}

interface IUserAddress {
  country: string;
  city: string;
  street: string;
  buildingNumber: string;
  flatNumber?: string;
}