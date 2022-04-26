import React from 'react';
import { Edit, Trash } from 'tabler-icons-react';

const OrderItem = ({ order, onEditOrderClickHandler, onDeleteOrderClickHandler }) => {
  const { orderId, bidType, bidAmount, bidActiveDuration, location, sendToFavorites, selected } = order;

  return (
    <div className={`order-item-card noselect p-4 w-full ${selected ? 'border-2 border-indigo-700/60' : 'border'}`}>
      <div className="flex items-center border-b-2 border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-lightest-navy text-base font-semibold">{`Order ${orderId}`}</p>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() => onEditOrderClickHandler(orderId)}
              className="text-base flex items-center cursor-pointer text-indigo-500 hover:text-indigo-700"
              title="Edit Bid"
            >
              <Edit strokeWidth={2} />
            </div>
            <div
              onClick={() => onDeleteOrderClickHandler(orderId)}
              className="text-base flex items-center cursor-pointer text-red-400 hover:text-red-600"
              title="Delete Bid"
            >
              <Trash strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm leading-4 pt-3">
          <span className="font-medium">Status: </span>
          Bid Unaccepted
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Type: </span>
          {bidType}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Amount: </span>
          {bidAmount}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Active Duration: </span>
          {bidActiveDuration}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Location: </span>
          {location}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Send to Favorites: </span>
          {sendToFavorites ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
