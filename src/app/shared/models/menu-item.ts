import { MenuCategory } from './menu-category';
import { Rating } from './rating';

export type MenuItem = {
  id: number;
  title: string;
  price: number;
  category: MenuCategory;
  isBestSeller: boolean;
  rating?: Rating;
  totalQuantity?: number;
  image: string;
  isCustomizable: boolean;
};
