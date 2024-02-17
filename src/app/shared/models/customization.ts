import { MenuItem } from './menu-item';
import { MenuQuantity } from './menu-quantity';

export type Customization = Pick<
  MenuItem & { quantity: MenuQuantity; selected: boolean },
  'title' | 'price' | 'quantity' | 'selected'
>;
