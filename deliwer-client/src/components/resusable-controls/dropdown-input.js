import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';

const DropdownInput = ({ label, options, required }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const onClickHandler = (value) => {
    setShowOptions(false);
    setSelectedValue(value);
  };

  return (
    <div className="relative">
      <label className="text-sm leading-none text-gray-800">{label}</label>
      <div
        className="w-full p-[10px] mt-3 bg-white border rounded border-gray-200 focus:outline-none focus:border-gray-600 flex items-center justify-between cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className="text-gray-800 text-sm leading-3 tracking-normal font-medium">{selectedValue}</p>
        <div className="text-gray-800 cursor-pointer">
          {showOptions ? <ChevronUp strokeWidth={1.5} /> : <ChevronDown strokeWidth={1.5} />}
        </div>
      </div>
      <input required value={selectedValue} readOnly className="-z-50 absolute top-12 left-5" />
      {showOptions && (
        <ul className="visible z-10 transition duration-300 opacity-100 bg-white shadow rounded mt-2 pb-1 w-full absolute">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer text-gray-800 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal"
              onClick={() => onClickHandler(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
