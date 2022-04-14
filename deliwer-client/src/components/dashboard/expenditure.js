import React from "react";
import DropdownInput from "../resusable-controls/dropdown-input";

export default function Expenditure() {
  const month = [
    "April",
    "March",
    "February",
    "January",
    "December",
    "November",
    "October",
    "September",
    "August",
    "July",
    "June",
    "May",
  ];
  return (
    <div className="card w-full justify-center">
      <div className="rounded shadow bg-white px-6 py-5">
        <div className="items-center">
          <div>
            <p className="text-xl font-semibold leading-4 text-gray-800">
              <DropdownInput options={month} />
            </p>
            <p className="text-md leading-3 text-gray-500 pt-4 pb-1">
              This Month
            </p>
            <p className="text-base font-medium leading-none text-gray-800">
              $4055.56
            </p>
            <p className="text-md leading-none text-gray-500 pt-5">
              68.2% more earnings than last month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
