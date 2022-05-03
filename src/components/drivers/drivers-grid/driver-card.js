import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MessageDots, Star, UserCircle } from 'tabler-icons-react';

const DriverCard = ({ name, yourOrders, totalOrders, favorite, rating, reviews, setFavoriteDriver }) => {
  return (
    <div className="cursor-pointer noselect border driver-card p-4 w-full h-fit last:mb-2">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div className="text-lightest-navy flex items-center">
            <UserCircle strokeWidth={2} />
            <div>
              <p className="ml-1 text-base font-semibold">{name}</p>
            </div>
          </div>
          <div driver-name={name} onClick={setFavoriteDriver} className="flex items-center text-lg cursor-pointer">
            {favorite ? (
              <FontAwesomeIcon val={name} className="text-red-400 hover:text-red-600" icon={faHeart} />
            ) : (
              <FontAwesomeIcon val={name} icon={farHeart} className="hover:text-red-400" />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Orders delivered for you: </span>
          {yourOrders}
        </p>
        <p className="text-sm leading-4 pt-2">
          <span className="font-medium">Total orders delivered: </span>
          {totalOrders}
        </p>
      </div>
      <div className="mt-4 pt-2 flex justify-around text-gray-600 border-t border-gray-200">
        <div className="flex items-center hover:text-indigo-600">
          <Star strokeWidth={2} />
          <span className="ml-3">{rating}</span>
        </div>
        <div className="border-r-[1.5px] border-gray-200"></div>
        <div className="flex items-center hover:text-indigo-600">
          <MessageDots strokeWidth={2} />
          <span className="ml-3">{reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
