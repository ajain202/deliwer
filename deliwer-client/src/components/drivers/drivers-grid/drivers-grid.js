import React from 'react';
import DriverCard from './driver-card';
import { drivers } from '../../dummy-data';

const DriversGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {drivers &&
        drivers.map((driver) => (
          <DriverCard
            name={driver.name}
            favorite={driver.favorite}
            totalOrders={driver.totalOrders}
            yourOrders={driver.yourOrders}
            rating={driver.rating}
            reviews={driver.reviews}
          />
        ))}
    </div>
  );
};

export default DriversGrid;
