import React from 'react';
import { Phone, Edit } from 'tabler-icons-react';

const OrderItem = () => {
  return (
    <div className="card mb-5 p-5 w-full">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-xl font-medium leading-5 text-gray-800">Order 12</p>
          </div>
          {/* <div>
            <div className="flex items-center">
              <span>
                <Edit strokeWidth={1.5} />
              </span>
              <span className="ml-1 font-normal">Edit</span>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <p className="text-lg leading-4 py-4 font-medium text-gray-600">ETA 15 mins</p>
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
