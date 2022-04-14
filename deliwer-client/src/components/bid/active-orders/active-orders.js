import React, { useState } from 'react';
import { activeOrders } from '../../dummy-data';
import SearchBox from '../../resusable-controls/search-box';
import OrderItem from './order-item';

const ActiveOrders = () => {
  const [searchOrderID, setSearchOrderID] = useState('');

  const onChangeHandler = (e) => {
    setSearchOrderID(e.target.value);
  };

  return (
    <div className="px-2 w-full">
      <SearchBox placeholder="Order Id" onChangeHandler={onChangeHandler} />
      <div className="mt-5 flex flex-col items-center justify-center w-full">
        {activeOrders &&
          activeOrders
            .filter((order) => order.orderId.indexOf(searchOrderID) > -1)
            .map((order) => (
              <OrderItem key={order.orderId} orderId={order.orderId} estimatedTime={order.estimatedTime} status={order.status} />
            ))}
      </div>
    </div>
  );
};

export default ActiveOrders;
