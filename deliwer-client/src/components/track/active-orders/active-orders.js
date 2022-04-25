import React, { useState } from 'react';
import SearchBox from '../../resusable-controls/search-box';
import OrderItem from "./order-item";

const ActiveOrders = ({activeOrders,onActiveOrderClickHandler}) => {
  const [searchOrderID, setSearchOrderID] = useState('');
  const onChangeHandler = (e) => {
    setSearchOrderID(e.target.value);
  };

  return (
    <div className="px-2 w-full">
      <SearchBox placeholder="Search Active Orders" onChangeHandler={onChangeHandler} />
      <div className="flex flex-row md:flex-col  items-center justify-center w-full overflow-x-auto">
        {activeOrders && activeOrders
        .filter((order) => order.orderId.indexOf(searchOrderID) > -1)
        .map((order) => <OrderItem key={order.orderId} order={order} onActiveOrderClickHandler={onActiveOrderClickHandler}/>)}
      </div>
    </div>
  );
};

export default ActiveOrders;
