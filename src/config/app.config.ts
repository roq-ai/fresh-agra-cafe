interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Manager'],
  tenantName: 'Vendor',
  applicationName: 'fresh agra',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage account', 'View Vendor profiles and product listings', 'Manage orders'],
  ownerAbilities: ['Manage Vendor profile', 'Invite Managers to the platform'],
  getQuoteUrl: 'https://app.roq.ai/proposal/07952297-7fb7-4ffe-895b-062dbcd7b115',
};
