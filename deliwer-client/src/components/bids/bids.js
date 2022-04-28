import React, { useState } from 'react';
import ActiveOrders from './active-orders/active-orders';
import Form from './forms/form';
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
const Bids = ({ activeOrders, setActiveOrders }) => {
  const [activeForm, setActiveForm] = useState('new');

  const addNewBid = (newBid) => {
    setActiveOrders([
      {
        ...newBid,
        selected: false,
      },
      ...activeOrders,
    ]);
  };

  const editBid = (updateBid) => {
    setActiveOrders(activeOrders.map((order) => (order.orderId === updateBid.orderId ? { ...updateBid, selected: false } : order)));
    setActiveForm('new');
  };

  const cancelEditBid = () => {
    setActiveOrders(activeOrders.map((order) => ({ ...order, selected: false })));
    setActiveForm('new');
  };

  const onEditBidClickHandler = (orderId) => {
    setActiveForm('edit');
    setActiveOrders(
      activeOrders.map((order) => (order.orderId === orderId ? { ...order, selected: true } : { ...order, selected: false }))
    );
  };

  const onDeleteOrderClickHandler = (orderId) => {
    if (activeOrders.filter((order) => order.orderId === orderId)[0].selected) {
      setActiveForm('new');
    }
    setActiveOrders(activeOrders.filter((order) => order.orderId !== orderId));
    toast.error(`Bid with order id:${orderId} deleted`);
  };

  console.log('activeOrders', activeOrders);
  return (
    <>
      <div className="container p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-8 md:gap-4 min-w-full">
        <div className="lg:col-span-3 xl:col-span-2 order-last md:pr-2 md:order-none md:overflow-y-auto md:h-0 md:min-h-full custom-scrollbar">
          <ActiveOrders
            activeOrders={activeOrders}
            onEditBidClickHandler={onEditBidClickHandler}
            onDeleteOrderClickHandler={onDeleteOrderClickHandler}
          />
        </div>
        <div className="lg:col-span-2 xl:col-span-1">
          <Form
            activeOrders={activeOrders}
            addNewBid={addNewBid}
            editBid={editBid}
            activeForm={activeForm}
            setActiveForm={setActiveForm}
            cancelEditBid={cancelEditBid}
          ></Form>
        </div>
      </div>
      <Toaster />
    </>
  );
};
export default Bids;
