import React, { useState } from 'react';
import DriversGrid from './drivers-grid/drivers-grid';
import FilterPane from './filter-pane/filter-pane';

const Drivers = () => {
  const [searchDriverName, setSearchDriverName] = useState('');
  const [favorites, setFavorites] = useState(false);
  const [sortByValue, setSortByValue] = useState('Ratings');

  return (
    <>
      <div className="container p-3 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4 md:h-[90vh] min-w-full">
        <div className="md:col-span-1 h-auto">
          <FilterPane
            onFilterChangeHandler={(e) => setSearchDriverName(e.target.value)}
            onFavoriteClickHandler={() => setFavorites(!favorites)}
            sortByValue={sortByValue}
            setSortByValue={setSortByValue}
          />
        </div>
        <div className="custom-scrollbar md:pr-2 md:col-span-2 xl:col-span-3 h-auto overflow-y-auto">
          <DriversGrid favorites={favorites} searchParam={searchDriverName} sortByValue={sortByValue} />
        </div>
      </div>
    </>
  );
};
export default Drivers;
