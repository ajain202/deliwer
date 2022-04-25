import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Edit, Phone } from 'tabler-icons-react';

const OrderItem = ({ order, setCurrentOrder }) => {
  console.log('order', order);
  const { orderId, status, contact, estimatedTime } = order;

  let statusColor;
  if (status === 'bid-unaccepted') {
    statusColor = 'text-red-500';
  } else if (status === 'bid-accepted') {
    statusColor = 'text-yellow-500';
  } else {
    statusColor = 'text-green-500';
  }

  return (
    <div className="order-item-card p-4 w-full border">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-xl font-medium leading">{`Order ${orderId}`}</p>
          </div>
          <div>
            <div className={`flex items-center text-sm ${statusColor}`}>
              <FontAwesomeIcon icon={faCircle} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base leading-4 py-4 font-medium">{`ETA ${estimatedTime}`}</p>
        <div className="pt-4 flex justify-between">
          <div className="flex items-center">
            <span>
              <Phone strokeWidth={1.5} />
            </span>
            <span className="ml-1 font-normal">{contact}</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-indigo-600" onClick={setCurrentOrder(order)}>
            <span>
              <Edit strokeWidth={1.5} />
            </span>
            <span className="ml-1 font-normal">Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
