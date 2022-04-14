import React from 'react';

const RadioInput = ({ options }) => {
  return (
    <>
      {options &&
        options.map((option) => (
          <div className="flex items-center mb-4">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
            </div>
            <p className="ml-3 text-md leading-4 font-normal text-gray-800 dark:text-gray-100">{option.label}</p>
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
    </>
  );
};
export default RadioInput;