import React, { useState } from 'react';
import ActiveOrders from './active-orders/active-orders';
import Map from './map/map';
import Timeline from './timeline/timeline';

const Track = ({ activeOrdersArray }) => {
  const [activeOrders, setActiveOrders] = useState(
    activeOrdersArray.map((order, index) => (index === 0 ? { ...order, selected: true } : { ...order, selected: false }))
  );

  const onActiveOrderClickHandler = (orderId) => {
    setActiveOrders(
      activeOrders.map((order) => (orderId === order.orderId ? { ...order, selected: true } : { ...order, selected: false }))
    );
  };

  return (
    <>
      <div className="container p-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:h-[90vh] min-w-full">
        <div className="custom-scrollbar md:pr-2 md:col-span-1 h-auto overflow-y-auto">
          <ActiveOrders activeOrders={activeOrders} onActiveOrderClickHandler={onActiveOrderClickHandler} />
        </div>

        <div className="card p-3 md:col-span-2 h-auto flex flex-col justify-between">
          <div className="md:h-full h-[200px]">
            <Map currOrder={activeOrders.filter((e) => e.selected)[0]} />
          </div>
          <div>
            <Timeline currOrder={activeOrders.filter((e) => e.selected)[0]} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Track;
