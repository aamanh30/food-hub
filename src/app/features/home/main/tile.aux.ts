import { TileLink } from '../../../shared/models';

export const tiles: ReadonlyArray<TileLink> = [
  {
    name: 'Veg',
    image: 'assets/icons/vegetarian.png',
    link: '/catalogue/vegetarian'
  },
  {
    name: 'Non Veg',
    image: 'assets/icons/non-vegetarian.png',
    link: '/catalogue/non-vegetarian'
  },
  {
    name: 'Kosher',
    image: 'assets/icons/kosher.png',
    link: '/catalogue/kosher'
  },
  {
    name: 'Chinese',
    image: 'assets/icons/chinese.png',
    link: '/catalogue/chinese'
  }
];
