import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MessageDots, Star, UserCircle } from "tabler-icons-react";

const DriverCard = ({
  name,
  yourOrders,
  totalOrders,
  favorite,
  rating,
  reviews,
  setFavoriteDriver,
}) => {
  return (
    <div className="card p-5 w-full h-fit last:mb-2">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <span>
              <UserCircle strokeWidth={1.5} size={"1.8rem"} />
            </span>
            <span className="ml-2 text-xl font-medium leading-5 text-gray-800">
              {name}
            </span>
          </div>
          <div>
            <div
              driver-name={name}
              onClick={setFavoriteDriver}
              className="flex items-center text-xl cursor-pointer"
            >
              {favorite ? (
                <FontAwesomeIcon
                  val={name}
                  className="text-red-500"
                  icon={faHeart}
                />
              ) : (
                <FontAwesomeIcon val={name} icon={farHeart} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-4 font-medium text-lg text-gray-600">{`Orders delivered for you ${yourOrders}`}</p>
        <p className="py-4 font-medium text-lg text-gray-600">{`Total orders delivered ${totalOrders}`}</p>
        <div className="pt-4 flex justify-between text-gray-600 border-t border-gray-200">
          <div className="flex items-center">
            <span>
              <Star strokeWidth={1.5} />
            </span>
            <span className="ml-3 text-xl font-normal">{rating}</span>
          </div>
          <div className="border-r-[1.5px] border-gray-200"></div>
          <div className="flex items-center">
            <span>
              <MessageDots strokeWidth={1.5} />
            </span>
            <span className="ml-3 text-xl font-normal">{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
