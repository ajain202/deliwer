import React from "react";
import { colors } from "tailwindcss/defaultTheme";
import steps from '../../../assets/images/Steps.png';
import steps2 from '../../../assets/images/Steps2.png';
import steps3 from '../../../assets/images/Steps3.png';
const defaultTheme = require("tailwindcss/defaultTheme");

const Timeline = ({currOrder}) => {
  let statusbid="incomplete"
  let statustransit="incomplete"
  let statusdelivered="incomplete"
  if(currOrder.status==="bid-accepted"){
     statusbid="ongoing"
  }
  else if (currOrder.status==="in-transit"){
     statusbid="complete"
     statustransit="ongoing"
  }
  else if (currOrder.status==="delivered"){
    statusbid="complete"
    statustransit="complete"
    statusdelivered="complete"
 };
  return (
    <div class="bg-gray-100 py-6 flex flex-wrap items-center justify-center">
      <div>
        <Arrow status={statusbid} text1="Bid Accepted" />
      </div>
      <div>
        <Arrow status={statustransit} text1="Dispatched" />
      </div>
      <div>
        <Arrow status={statusdelivered} text1="Delivered" />
      </div>
    </div>
  );
};
export default Timeline;

const Arrow = ({ status, text1 }) => {
  let color;
  if (status == "complete") {
    color = "#8892b0";
  } else if (status == "ongoing") {
    color = "#1dafed";
  } else {
    color = "#1dafed";
  }
  return (
    <div class="w-52 h-16 relative md:mt-0 mt-4">
      {status === "complete" ? (
        <img
          src={steps}
          alt="step1"
          class="w-full h-full"
        />
      ) : (
        <></>
      )}
      {status === "ongoing" ? (
        <img
          src={steps2}
          alt="step2"
          class="w-full h-full"
        />
      ) : (
        <></>
      )}
      {status === "incomplete" ? (
        <img
          src={steps3}
          alt="step3"
          class="w-full h-full"
        />
      ) : (
        <></>
      )}
      <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
        <p
          tabindex="0"
          class={`focus:outline-none w-full text-sm font-medium leading-4 text-[${color}]`}
        >
          {text1}
        </p>
      </div>
    </div>
  );
};
