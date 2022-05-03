import React, { useState } from 'react';
import SearchBox from '../../resusable-controls/search-box';
import OrderItem from './order-item';

const ActiveOrders = ({ activeOrders, onActiveOrderClickHandler }) => {
  const [searchOrderID, setSearchOrderID] = useState('');
  const onChangeHandler = (e) => {
    setSearchOrderID(e.target.value);
  };

  return (
    <div className="w-full">
      <SearchBox placeholder="Search Active Orders" onChangeHandler={onChangeHandler} />
      <div className="py-3 grid grid-cols-1 gap-4 items-center justify-center w-full">
        {activeOrders &&
          activeOrders
            .filter((order) => order.orderId.indexOf(searchOrderID) > -1)
            .map((order) => <OrderItem key={order.orderId} order={order} onActiveOrderClickHandler={onActiveOrderClickHandler} />)}
      </div>
    </div>
  );
};

export default ActiveOrders;
