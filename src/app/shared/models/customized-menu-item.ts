import { AddOn } from './add-on';
import { Customization } from './customization';
import { MenuItem } from './menu-item';

export type CustomizedMenuItem = MenuItem & {
  customizations: Customization[];
  addOns: AddOn[];
  maxAddOn: number;
};
