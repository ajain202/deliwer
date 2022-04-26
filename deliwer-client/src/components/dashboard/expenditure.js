import React, { useState } from "react";
import DropdownInput from "../resusable-controls/dropdown-input";
import { month } from "../dummy-data";

export default function Expenditure() {
  const [currentMonth, setCurrentMonth] = useState("April");
  return (
    <div className="card w-full justify-center">
      <div className="rounded shadow bg-white px-6 py-5">
        <div className="items-center">
          <div>
            <p className="text-xl font-semibold leading-4 ">
              <DropdownInput
                placeholder="Month"
                value={currentMonth}
                options={month.map((e) => e.month)}
                setValue={(value) => {
                  console.log("value", value);
                  return setCurrentMonth(value);
                }}
              />
            </p>
            <p className="text-md leading-3 pt-4 pb-1">
              Monthly Expenditure:{" "}
              <span className="text-base font-medium leading-none">
                {month.filter((m) => m.month === currentMonth)[0].expenses +
                  "$"}
              </span>
            </p>
            <p className="text-md leading-none pt-5">
              {month.filter((m) => m.month === currentMonth)[0].delta +
                "% less than last month"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
