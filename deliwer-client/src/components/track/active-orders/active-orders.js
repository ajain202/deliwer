import React from "react";
import OrderItem from "./order-item";

const ActiveOrders = () => {
  const activeOrders = [{ Order: "Order 123", ETA: "15 Min" },{ Order: "Order 345", ETA: "15 Min" },{ Order: "Order 123", ETA: "15 Min" }];
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        {activeOrders && activeOrders.map((order)=><OrderItem Order={order.Order} ETA={order.ETA} />)}
      </div>
    </div>
  );
};

export default ActiveOrders;
