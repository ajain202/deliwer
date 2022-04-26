import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Phone, MessageCircle } from 'tabler-icons-react';

const OrderItem = ({ order, onActiveOrderClickHandler }) => {
  const { orderId, status, contact, estimatedTime, location, selected } = order;

  let statusColor;
  let statusText;
  if (status === 'bid-unaccepted') {
    statusColor = 'text-red-400';
    statusText = 'Bid Unaccepted';
  } else if (status === 'bid-accepted') {
    statusColor = 'text-yellow-300';
    statusText = 'Bid Accepted';
  } else {
    statusColor = 'text-green-400';
    statusText = 'Delivering';
  }

  return (
    <div
      className={`order-item-card noselect p-4 w-full cursor-pointer ${selected ? 'border-2 border-indigo-700/60' : 'border'}`}
      onClick={() => onActiveOrderClickHandler(orderId)}
    >
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-lightest-navy text-base font-semibold">{`Order ${orderId}`}</p>
          </div>
          <div title={statusText} className={`flex items-center text-sm ${statusColor}`}>
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
            <Phone strokeWidth={2} />
            <span className="ml-1">{contact}</span>
          </div>
          <div className="flex items-center text-indigo-500 hover:text-indigo-700">
            <MessageCircle strokeWidth={2} />
            <span className="ml-1">Chat</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
