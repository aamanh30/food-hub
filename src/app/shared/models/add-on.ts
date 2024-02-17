import { MenuItem } from './menu-item';

export type AddOn = Partial<MenuItem & { selected: boolean }>;
