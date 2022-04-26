import React from 'react';
import Statistics from './statistics';
import Expenditure from './expenditure';
import Graph from './graph';
import OrderHistory from './order-history';

const Dashboard = () => {
  console.log('dashboard');
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-5 p-3 gap-6 md:h-[90vh] min-w-full">
        <div className="md:col-span-3 h-auto">
          <Statistics />
          <OrderHistory />
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
