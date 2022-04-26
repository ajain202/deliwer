import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Phone, MessageCircle } from 'tabler-icons-react';

const OrderItem = ({ order, onActiveOrderClickHandler }) => {
  const { orderId, status, contact, estimatedTime, location, selected } = order;

  let statusColor;
  if (status === 'bid-unaccepted') {
    statusColor = 'text-red-400';
  } else if (status === 'bid-accepted') {
    statusColor = 'text-yellow-300';
  } else {
    statusColor = 'text-green-400';
  }

  return (
    <div
      className={`order-item-card p-4 w-full cursor-pointer ${selected ? 'border-[1.5px] border-indigo-700/60' : 'border'}`}
      onClick={() => onActiveOrderClickHandler(orderId)}
    >
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-lightest-navy text-base font-semibold leading">{`Order ${orderId}`}</p>
          </div>
          <div className={`flex items-center text-sm ${statusColor}`}>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm leading-4 pt-2">
          {status === 'bid-unaccepted' ? <span className="font-medium">Bid Unaccepted</span> : <></>}
          {status === 'bid-accepted' ? <span className="font-medium">Reaching in: </span> : <></>}
          {status === 'in-transit' ? <span className="font-medium">Delivering in: </span> : <></>}
          {status !== 'bid-unaccepted' && estimatedTime}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Location: </span>
          {location}
        </p>
      </div>
      {status !== 'bid-unaccepted' && (
        <div className="text-sm pt-4 flex justify-between">
          <div className="flex items-center">
            <span>
              <Phone strokeWidth={2} />
            </span>
            <span className="ml-1">{contact}</span>
          </div>
          <div className="flex items-center text-indigo-500 hover:text-indigo-700">
            <span>
              <MessageCircle strokeWidth={2} />
            </span>
            <span className="ml-1">Chat</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
