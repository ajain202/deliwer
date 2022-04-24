import React from 'react';
import DropdownInput from '../resusable-controls/dropdown-input';

export default function Expenditure() {
  const month = [
    { expenses: 10, month: 'April' },
    { expenses: 10, month: 'March' },
    { expenses: 10, month: 'February' },
    { expenses: 10, month: 'January' },
    { expenses: 10, month: 'December' },
    { expenses: 10, month: 'November' },
    { expenses: 10, month: 'October' },
    { expenses: 10, month: 'September' },
    { expenses: 10, month: 'August' },
  ];
  return (
    <div className="card w-full justify-center">
      <div className="rounded shadow bg-white px-6 py-5">
        <div className="items-center">
          <div>
            <p className="text-xl font-semibold leading-4 text-gray-800">
              <DropdownInput placeholder="Month" options={month.map((e) => e.month)} />
            </p>
            <p className="text-md leading-3 text-gray-500 pt-4 pb-1">This Month</p>
            <p className="text-base font-medium leading-none text-gray-800">$4055.56</p>
            <p className="text-md leading-none text-gray-500 pt-5">68.2% more earnings than last month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
