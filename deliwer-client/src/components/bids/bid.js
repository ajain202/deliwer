import React, { useState } from 'react';
import { activeOrdersArray } from '../dummy-data';
import ActiveOrders from './active-orders/active-orders';
import Form from './forms/form';

const Bid = () => {
  const [activeOrders, setActiveOrders] = useState(activeOrdersArray);
  const [currentOrder, setCurrentOrder] = useState(null);

  const addNewBid = (newOrder) => {
    setActiveOrders([
      ...activeOrders,
      {
        orderId: Math.floor(100000 + Math.random() * 900000).toString(),
        ...newOrder,
      },
    ]);
  };

  return (
    <>
      <div className="container p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-6 min-w-full">
        <div className="lg:col-span-3 xl:col-span-2 order-last md:order-none">
          <ActiveOrders activeOrders={activeOrders} setCurrentOrder={setCurrentOrder} />
        </div>
        <div className="lg:col-span-2 xl:col-span-1">
          <Form addNewBid={addNewBid} currentOrder={currentOrder}></Form>
        </div>
      </div>
    </>
  );
};
export default Bid;
