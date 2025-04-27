import { Recipe, DonationCenter, WasteStats } from '../types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Community Kitchen Veggie Stir Fry',
    ingredients: ['Mixed Vegetables', 'Rice', 'Soy Sauce', 'Garlic', 'Ginger'],
    instructions: [
      'Cook rice according to package instructions for 10 servings',
      'Chop all vegetables into uniform pieces',
      'Sauté garlic and ginger in large wok',
      'Add vegetables and stir fry until tender-crisp',
      'Add soy sauce and other seasonings',
      'Serve over rice'
    ],
    servings: 10,
    prepTime: '30 mins',
    imageUrl: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Bulk Pasta Primavera',
    ingredients: ['Pasta', 'Assorted Vegetables', 'Olive Oil', 'Parmesan Cheese', 'Herbs'],
    instructions: [
      'Boil pasta in large pot',
      'Sauté vegetables with herbs',
      'Combine pasta and vegetables',
      'Top with cheese before serving'
    ],
    servings: 15,
    prepTime: '25 mins',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Simple Fruit Salad',
    ingredients: ['Assorted Fruits', 'Honey', 'Lemon Juice', 'Mint'],
    instructions: [
      'Wash and chop all fruits',
      'Combine in large serving bowl',
      'Mix honey and lemon juice',
      'Pour over fruit and toss gently',
      'Garnish with mint leaves'
    ],
    servings: 12,
    prepTime: '15 mins',
    imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const donationCenters: DonationCenter[] = [
  {
    id: '1',
    name: 'Second Harvest of Silicon Valley',
    address: '4001 N 1st St, San Jose, CA 95134',
    phone: '(408) 266-8866',
    acceptingItems: ['Fresh Produce', 'Canned Goods', 'Dry Goods', 'Prepared Meals'],
    hours: 'Mon-Fri: 8am-5pm',
    coordinates: {
      lat: 37.4175,
      lng: -121.9537
    }
  },
  {
    id: '2',
    name: 'Martha\'s Kitchen',
    address: '311 Willow St, San Jose, CA 95110',
    phone: '(408) 293-6111',
    acceptingItems: ['Prepared Meals', 'Fresh Produce', 'Non-Perishables'],
    hours: 'Mon-Fri: 9am-4pm',
    coordinates: {
      lat: 37.3366,
      lng: -121.8893
    }
  },
  {
    id: '3',
    name: 'Loaves & Fishes Family Kitchen',
    address: '1534 Berger Dr, San Jose, CA 95112',
    phone: '(408) 922-9085',
    acceptingItems: ['Fresh Food', 'Prepared Meals', 'Pantry Items', 'Produce'],
    hours: 'Mon-Fri: 8:30am-4:30pm',
    coordinates: {
      lat: 37.3725,
      lng: -121.8872
    }
  }
];

export const initialWasteStats: WasteStats = {
  savedItems: 34,
  donationsMade: 9,
  mealsProvided: 18
};