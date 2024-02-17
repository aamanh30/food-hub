import { MenuCategory, MenuItem } from 'src/app/shared/models';

export const menuItems: MenuItem[] = [
  {
    id: 2001,
    title: 'Burrito Kebab Wrap',
    price: 80,
    category: MenuCategory.NonVegetarian,
    isBestSeller: false,
    rating: {
      rate: 4.1,
      count: 4028
    },
    image: 'assets/images/food-category/burrito-kebab-wrap.png',
    isCustomizable: true
  },
  {
    id: 2002,
    title: 'Chicken Crispy',
    price: 120,
    category: MenuCategory.NonVegetarian,
    isBestSeller: true,
    rating: {
      rate: 4.7,
      count: 5819
    },
    image: 'assets/images/food-category/chicken-crispy.png',
    isCustomizable: false
  },
  {
    id: 1001,
    title: 'Fried Rice',
    price: 70,
    category: MenuCategory.Vegetarian,
    isBestSeller: false,
    rating: {
      rate: 4.3,
      count: 1790
    },
    image: 'assets/images/food-category/fried-rice.png',
    isCustomizable: false
  },
  {
    id: 1002,
    title: 'Glutinous Rice',
    price: 90,
    category: MenuCategory.Vegetarian,
    isBestSeller: true,
    rating: {
      rate: 4.5,
      count: 1508
    },
    image: 'assets/images/food-category/glutinous-rice.png',
    isCustomizable: true
  },
  {
    id: 3001,
    title: 'Chilli Crab Cuisine',
    price: 180,
    category: MenuCategory.Kosher,
    isBestSeller: true,
    rating: {
      rate: 4.5,
      count: 6191
    },
    image: 'assets/images/food-category/chilli-crab-cuisine.png',
    isCustomizable: true
  },
  {
    id: 3002,
    title: 'Shellfish Kashrut',
    price: 130,
    category: MenuCategory.Kosher,
    isBestSeller: true,
    rating: {
      rate: 4.3,
      count: 3860
    },
    image: 'assets/images/food-category/shellfish-kashrut.png',
    isCustomizable: true
  },
  {
    id: 4001,
    title: 'Chowmein Chinese Noodles',
    price: 120,
    category: MenuCategory.Chinese,
    isBestSeller: false,
    rating: {
      rate: 4.1,
      count: 2016
    },
    image: 'assets/images/food-category/chow-mein-chinese-noodles.png',
    isCustomizable: true
  },
  {
    id: 4002,
    title: 'Yangzhou Fried Rice',
    price: 100,
    category: MenuCategory.Chinese,
    isBestSeller: true,
    rating: {
      rate: 4.8,
      count: 3689
    },
    image: 'assets/images/food-category/yangzhou-fried-rice.png',
    isCustomizable: true
  }
];
