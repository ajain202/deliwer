import React, { useState } from 'react';
import SearchBox from '../../resusable-controls/search-box';
import OrderItem from './order-item';

const ActiveOrders = ({ activeOrders, setCurrentOrder }) => {
  const [searchOrderID, setSearchOrderID] = useState('');

  const onChangeHandler = (e) => {
    setSearchOrderID(e.target.value);
  };

  return (
    <div className="w-full">
      <SearchBox placeholder="Search Active Orders" onChangeHandler={onChangeHandler} />
      <div className="custom-scrollbar overflow-y-auto h- py-3 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center w-full">
        {activeOrders &&
          activeOrders
            .filter((order) => order.orderId.indexOf(searchOrderID) > -1)
            .map((order) => <OrderItem key={order.orderId} order={order} setCurrentOrder={setCurrentOrder} />)}
      </div>
    </div>
  );
};

export default ActiveOrders;
