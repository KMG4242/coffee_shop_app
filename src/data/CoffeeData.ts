const CoffeeData = [
  {
    id: 'C1',
    name: 'Americano',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/americano/square/Skype_Picture_2024_10_01T09_49_00_535Z.jpeg'),
    imagelink_portrait: require('../assets/coffee_assets/americano/portrait/Skype_Picture_2024_10_01T09_49_00_535Z.jpeg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '120', currency: 'Rs'},
      {size: 'M', price: '180', currency: 'Rs'},
      {size: 'L', price: '200', currency: 'Rs'},
    ],
    average_rating: 4.9,
    ratings_count: '10,779',
    favourite: false,
    type: 'Coffee',
    index: 0,
  },
  {
    id: 'C2',
    name: 'Americano',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/americano/square/Skype_Picture_2024_10_01T09_48_47_642Z.jpeg'),
    imagelink_portrait: require('../assets/coffee_assets/americano/portrait/Skype_Picture_2024_10_01T09_48_47_642Z.jpeg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '150', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 3.0,
    ratings_count: '9,879',
    favourite: false,
    type: 'Coffee',
    index: 1,
  },
  {
    id: 'C3',
    name: 'Americano',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/americano/square/Skype_Picture_2024_10_01T09_48_55_975Z.jpeg'),
    imagelink_portrait: require('../assets/coffee_assets/americano/portrait/Skype_Picture_2024_10_01T09_48_55_975Z.jpeg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '300', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.2,
    ratings_count: '8,256',
    favourite: false,
    type: 'Coffee',
    index: 2,
  },
  {
    id: 'C4',
    name: 'Black Coffee',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee1.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '208', currency: 'Rs'},
      {size: 'M', price: '390', currency: 'Rs'},
      {size: 'L', price: '439', currency: 'Rs'},
    ],
    average_rating: 4.7,
    ratings_count: '8,792',
    favourite: false,
    type: 'Coffee',
    index: 3,
  },
  {
    id: 'C5',
    name: 'Black Coffee',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.2,
    ratings_count: '7,877',
    favourite: false,
    type: 'Coffee',
    index: 4,
  },
  {
    id: 'C6',
    name: 'Black Coffee',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/black_coffee/square/black_coffee3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/black_coffee/portrait/black_coffee3.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.7,
    ratings_count: '9,790',
    favourite: false,
    type: 'Coffee',
    index: 5,
  },
  {
    id: 'C7',
    name: 'Cappucchino',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino1.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '150', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.3,
    ratings_count: '7,890',
    favourite: false,
    type: 'Coffee',
    index: 6,
  },
  {
    id: 'C8',
    name: 'Cappucchino',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.8,
    ratings_count: '6,776',
    favourite: false,
    type: 'Coffee',
    index: 7,
  },
  {
    id: 'C9',
    name: 'Cappucchino',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/cappuccino/square/cappuccino3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/cappuccino/portrait/cappuccino3.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.1,
    ratings_count: '8,706',
    favourite: false,
    type: 'Coffee',
    index: 8,
  },
  {
    id: 'C10',
    name: 'Espresso',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/espresso/square/espresso1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso1.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '300', currency: 'Rs'},
      {size: 'M', price: '300', currency: 'Rs'},
      {size: 'L', price: '300', currency: 'Rs'},
    ],
    average_rating: 4.9,
    ratings_count: '6,707',
    favourite: false,
    type: 'Coffee',
    index: 9,
  },
  {
    id: 'C11',
    name: 'Espresso',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/espresso/square/espresso2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.0,
    ratings_count: '6,906',
    favourite: false,
    type: 'Coffee',
    index: 10,
  },
  {
    id: 'C12',
    name: 'Espresso',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/espresso/square/espresso3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/espresso/portrait/espresso3.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.6,
    ratings_count: '7,600',
    favourite: false,
    type: 'Coffee',
    index: 11,
  },
  {
    id: 'C13',
    name: 'Latte',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/latte/square/latte1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte1.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.5,
    ratings_count: '5,700',
    favourite: false,
    type: 'Coffee',
    index: 12,
  },
  {
    id: 'C14',
    name: 'Latte',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/latte/square/latte2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.3,
    ratings_count: '8,897',
    favourite: false,
    type: 'Coffee',
    index: 13,
  },
  {
    id: 'C15',
    name: 'Latte',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/latte/square/latte3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/latte/portrait/latte3.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.4,
    ratings_count: '6,796',
    favourite: false,
    type: 'Coffee',
    index: 14,
  },
  {
    id: 'C16',
    name: 'Macchiato',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato1.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.7,
    ratings_count: '5,687',
    favourite: false,
    type: 'Coffee',
    index: 15,
  },
  {
    id: 'C17',
    name: 'Macchiato',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 3.9,
    ratings_count: '6,890',
    favourite: false,
    type: 'Coffee',
    index: 16,
  },
  {
    id: 'C18',
    name: 'Macchiato',
    roasted: 'Medium Roasted',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
    imagelink_square: require('../assets/coffee_assets/macchiato/square/macchiato3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/macchiato/portrait/macchiato3.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 4.0,
    ratings_count: '8,906',
    favourite: false,
    type: 'Coffee',
    index: 17,
  },
  {
    id: 'C19',
    name: 'Luwak',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/luwak/luwak1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/luwak/luwak2.jpg'),
    ingredients: 'Milk',
    special_ingredient: 'With Steamed Milk',
    prices: [
      {size: 'S', price: '100', currency: 'Rs'},
      {size: 'M', price: '200', currency: 'Rs'},
      {size: 'L', price: '400', currency: 'Rs'},
    ],
    average_rating: 3.7,
    ratings_count: '6,890',
    favourite: false,
    type: 'Coffee',
    index: 18,
  },
];
export default CoffeeData;