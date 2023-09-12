import { OrderInterface } from 'interfaces/order';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  vendor?: VendorInterface;
  _count?: {
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
