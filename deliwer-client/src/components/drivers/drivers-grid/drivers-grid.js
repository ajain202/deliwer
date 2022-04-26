import React, { useState } from 'react';
import DriverCard from './driver-card';
import { driversarray } from '../../dummy-data';

const DriversGrid = ({ searchParam, favorites, sortByValue }) => {
  const [drivers, setDrivers] = useState(driversarray);

  const setFavoriteDriver = (e) => {
    setDrivers(drivers.map((d) => (d.name === e.currentTarget.getAttribute('driver-name') ? { ...d, favorite: !d.favorite } : d)));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {drivers
        ?.filter((driver) => driver.name.toLowerCase().indexOf(searchParam) > -1)
        .filter((driver) => (favorites ? driver.favorite && driver : driver))
        .sort((a, b) => {
          if (sortByValue === 'Orders delivered for you') return b.yourOrders - a.yourOrders;
          else if (sortByValue === 'Total orders delivered') return b.totalOrders - a.totalOrders;
          else return b.rating - a.rating;
        })
        .map((driver) => (
          <DriverCard
            key={driver.name}
            name={driver.name}
            favorite={driver.favorite}
            totalOrders={driver.totalOrders}
            yourOrders={driver.yourOrders}
            rating={driver.rating}
            reviews={driver.reviews}
            setFavoriteDriver={setFavoriteDriver}
          />
        ))}
    </div>
  );
};

export default DriversGrid;
