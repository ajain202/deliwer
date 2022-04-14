import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Edit, Phone } from 'tabler-icons-react';

const OrderItem = ({ orderId, estimatedTime, status }) => {
  let statusColor;
  if (status === 'bid-unaccepted') {
    statusColor = 'text-red-500';
  } else if (status === 'bid-accepted') {
    statusColor = 'text-yellow-500';
  } else {
    statusColor = 'text-green-500';
  }

  return (
    <div className="card mb-5 p-5 w-full">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-xl font-medium leading-5 text-gray-800">{`Order ${orderId}`}</p>
          </div>
          <div>
            <div className={`flex items-center text-sm ${statusColor}`}>
              <FontAwesomeIcon icon={faCircle} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg leading-4 py-4 font-medium text-gray-600">{`ETA ${estimatedTime}`}</p>
        <div className="pt-4 flex justify-between text-gray-600">
          <div className="flex items-center">
            <span>
              <Phone strokeWidth={1.5} />
            </span>
            <span className="ml-1 font-normal">Contact</span>
          </div>
          <div className="flex items-center">
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
