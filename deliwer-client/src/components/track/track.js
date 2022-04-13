import React from "react";
import ActiveOrders from '../bid/active-orders/active-orders';
import Timeline from "./timeline/timeline";

const Track = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 p-6 gap-6 md:h-[80vh] min-w-full">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="active-orders md:col-span-1 h-auto overflow-y-auto">
          <ActiveOrders />
        </div>

        <div className="md:col-span-2 h-auto">
          <div >
          blah
        </div>
        <div>
        <Timeline />
        </div>
        </div>

        <style>
          {' '}
          <style>{`
.active-orders::-webkit-scrollbar {
  width: 5px;
}

.active-orders::-webkit-scrollbar-thumb {
  background-color: var(--slate);
  border-radius: 5px;
}

.active-orders::-webkit-scrollbar-track {
  background: var(--light-gray);
}`}</style>
        </style>
      </div>
    </>
  );
};
export default Track;
