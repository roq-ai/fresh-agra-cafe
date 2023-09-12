import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  address: string;
  phone_number: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  address?: string;
  phone_number?: string;
}
