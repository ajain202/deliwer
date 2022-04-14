import React from "react";
import { colors } from "tailwindcss/defaultTheme";
const defaultTheme = require("tailwindcss/defaultTheme");

const Timeline = () => {
  return (
    <div class="bg-gray-100 py-6 flex flex-wrap items-center justify-center">
      <div>
        <Arrow status="complete" text1="Bid Accepted" />
      </div>
      <div>
        <Arrow status="ongoing" text1="Dispatched" />
      </div>
      <div>
        <Arrow status="incomplete" text1="Delivered" />
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
          src="https://i.ibb.co/DwNs7zG/Steps.png"
          alt="step1"
          class="w-full h-full"
        />
      ) : (
        <></>
      )}
      {status === "ongoing" ? (
        <img
          src="https://i.ibb.co/wNZ4nzy/Steps2.png"
          alt="step2"
          class="w-full h-full"
        />
      ) : (
        <></>
      )}
      {status === "incomplete" ? (
        <img
          src="https://i.ibb.co/c2k4Gbr/Steps3.png"
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
