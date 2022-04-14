export const activeOrders = [
  {
    orderId: Math.floor(100000 + Math.random() * 900000).toString(),
    estimatedTime: '15 mins',
    status: 'bid-accepted',
  },
  {
    orderId: Math.floor(100000 + Math.random() * 900000).toString(),
    estimatedTime: '10 mins',
    status: 'in-transit',
  },
  {
    orderId: Math.floor(100000 + Math.random() * 900000).toString(),
    estimatedTime: '--',
    status: 'bid-unaccepted',
  },
  {
    orderId: Math.floor(100000 + Math.random() * 900000).toString(),
    estimatedTime: '12 mins',
    status: 'in-transit',
  },
  {
    orderId: Math.floor(100000 + Math.random() * 900000).toString(),
    estimatedTime: '20 mins',
    status: 'in-transit',
  },
];

export const drivers = [
  {
    name: 'James',
    favorite: false,
    yourOrders: 16,
    totalOrders: 100,
    rating: 4.1,
    reviews: 100,
  },
  {
    name: 'Jimmy',
    favorite: true,
    yourOrders: 26,
    totalOrders: 125,
    rating: 4.2,
    reviews: 120,
  },
  {
    name: 'Jack',
    favorite: true,
    yourOrders: 36,
    totalOrders: 150,
    rating: 4.3,
    reviews: 140,
  },
  {
    name: 'Jamie',
    favorite: false,
    yourOrders: 46,
    totalOrders: 175,
    rating: 4.4,
    reviews: 160,
  },
  {
    name: 'Johnny',
    favorite: false,
    yourOrders: 56,
    totalOrders: 200,
    rating: 4.5,
    reviews: 180,
  },
  {
    name: 'Jacob',
    favorite: true,
    yourOrders: 66,
    totalOrders: 225,
    rating: 4.6,
    reviews: 200,
  },
];
