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
