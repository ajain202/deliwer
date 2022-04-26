import React from 'react';
import steps from '../../../assets/images/Steps.png';
import steps2 from '../../../assets/images/Steps2.png';
import steps3 from '../../../assets/images/Steps3.png';

const Timeline = ({ currOrder }) => {
  let statusbid = 'incomplete';
  let statustransit = 'incomplete';
  let statusdelivered = 'incomplete';
  if (currOrder.status === 'bid-accepted') {
    statusbid = 'ongoing';
  } else if (currOrder.status === 'in-transit') {
    statusbid = 'complete';
    statustransit = 'ongoing';
  } else if (currOrder.status === 'delivered') {
    statusbid = 'complete';
    statustransit = 'complete';
    statusdelivered = 'complete';
  }
  return (
    <div className="pt-5 grid grid-cols-3 items-center justify-center">
      <Arrow status={statusbid} text1="Bid Accepted" />
      <Arrow status={statustransit} text1="Dispatched" />
      <Arrow status={statusdelivered} text1="Delivered" />
    </div>
  );
};
export default Timeline;

const Arrow = ({ status, text1 }) => {
  let color;
  if (status === 'complete') {
    color = 'white';
  } else {
    color = '';
  }

  return (
    <div className="relative md:mt-0 mt-4 pointer-events-none">
      {status === 'complete' ? <img src={steps} alt="step1" className="w-full h-full" /> : <></>}
      {status === 'ongoing' ? <img src={steps2} alt="step2" className="w-full h-full" /> : <></>}
      {status === 'incomplete' ? <img src={steps3} alt="step3" className="w-full h-full" /> : <></>}
      <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
        <p tabIndex="0" className={`focus:outline-none w-full text-sm font-medium leading-4 text-${color}`}>
          {text1}
        </p>
      </div>
    </div>
  );
};
