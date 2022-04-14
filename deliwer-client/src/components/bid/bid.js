import React from 'react';
import ActiveOrders from './active-orders/active-orders';
import Form from './forms/form';

const Bid = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 p-6 gap-6 md:h-[80vh] min-w-full">
        <div className="md:col-span-2 h-auto">
          <Form></Form>
        </div>
        <div className="active-orders md:col-span-1 h-auto overflow-y-auto">
          <ActiveOrders />
        </div>
        <style>
          {`
          .active-orders::-webkit-scrollbar {
            width: 5px;
          }

          .active-orders::-webkit-scrollbar-thumb {
            background-color: var(--slate);
            border-radius: 5px;
          }

          .active-orders::-webkit-scrollbar-track {
            background: var(--light-gray);
          }
          `}
        </style>
      </div>
    </>
  );
};
export default Bid;
