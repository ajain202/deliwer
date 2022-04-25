import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';

const DropdownInput = ({ label, options, value, setValue, required, placeholder, set }) => {
  const [showOptions, setShowOptions] = useState(false);

  const onClickHandler = (value) => {
    setShowOptions(false);
    setValue(value);
  };

  return (
    <div className="relative">
      <label className="text-sm leading-none">{label}</label>
      <div
        className="w-full p-[10px] mt-2 border rounded border-gray-200 focus:outline-none focus:border-gray-600 flex items-center justify-between cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className="text-sm leading-3 tracking-normal font-medium">{value}</p>
        <div className="cursor-pointer">{showOptions ? <ChevronUp strokeWidth={1.5} /> : <ChevronDown strokeWidth={1.5} />}</div>
      </div>
      <input required value={value} readOnly className="-z-50 absolute top-12 left-5" />
      {showOptions && (
        <ul className="visible z-10 transition duration-300 opacity-100 bg-white shadow rounded mt-2 pb-1 w-full absolute">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal"
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
