import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderLegend = () => {
  return (
    <div className="p-2">
      <div>
        <FontAwesomeIcon className="text-yellow-300" icon={faCircle} /> Bid Accepted
      </div>
      <div className="">
        <FontAwesomeIcon className="text-green-400" icon={faCircle} /> Delivering
      </div>
      <div className="">
        <FontAwesomeIcon className="text-red-400" icon={faCircle} /> Bid Unaccepted
      </div>
    </div>
  );
};

export default OrderLegend;
