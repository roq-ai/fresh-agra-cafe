const mapping: Record<string, string> = {
  customers: 'customer',
  managers: 'manager',
  orders: 'order',
  products: 'product',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
