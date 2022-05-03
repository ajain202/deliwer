import React from 'react';

const RadioInput = ({ options, value, onChangeHandler }) => {
  return (
    <div>
      {options &&
        options.map((option) => (
          <div key={option.label} className="flex items-center mb-4">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                value={option.label}
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                checked={option.label === value}
                onChange={onChangeHandler}
              />
              <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
            </div>
            <p className="ml-3 text-base leading-4">{option.label}</p>
          </div>
        ))}
      <style>
        {`  
        .checkbox:checked {
            border: none;
        }
        .checkbox:checked + .check-icon {
            display: flex;
        }
        `}
      </style>
    </div>
  );
};
export default RadioInput;
