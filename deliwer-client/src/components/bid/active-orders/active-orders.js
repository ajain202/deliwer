import React from 'react';
import OrderItem from './order-item';

const ActiveOrders = () => {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <OrderItem />
      </div>
    </div>
  );
};

export default ActiveOrders;
