import { UserInterface } from 'interfaces/user';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ManagerInterface {
  id?: string;
  user_id: string;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vendor?: VendorInterface;
  _count?: {};
}

export interface ManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  vendor_id?: string;
}
