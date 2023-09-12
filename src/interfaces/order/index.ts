import { CustomerInterface } from 'interfaces/customer';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  product_id: string;
  quantity: number;
  total_price: number;
  order_date?: any;
  delivery_date?: any;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  product_id?: string;
}
