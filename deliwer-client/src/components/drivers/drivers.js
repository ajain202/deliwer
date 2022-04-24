import React from 'react';
import DriversGrid from './drivers-grid/drivers-grid';
import FilterPane from './filter-pane/filter-pane';

const Drivers = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 px-4 pt-4 gap-6 md:h-[80vh] min-w-full">
        <div className="pl-2 pt-2 md:col-span-1 h-auto">
          <FilterPane />
        </div>
        <div className="px-2 pt-2 custom-scrollbar md:col-span-2 xl:col-span-3 h-auto overflow-y-auto">
          <DriversGrid />
        </div>
      </div>
    </>
  );
};
export default Drivers;
