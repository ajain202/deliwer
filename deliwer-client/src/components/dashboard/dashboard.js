import React from 'react';
import Statistics from './statistics';
import Expenditure from './expenditure';
import Graph from './graph';

const Dashboard = () => {
  console.log('dashboard');
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-5 p-6 gap-6 md:h-[80vh] min-w-full">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300 border-dashed border-2 ] to remove dotted border */}
        <div className="md:col-span-3 h-auto">
          <Statistics />
        </div>
        <div className="md:col-span-2 h-auto">
          <Expenditure />
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
