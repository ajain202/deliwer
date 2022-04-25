import React from 'react';

const ToggleInput = ({ label, active, required, onChangeHandler }) => {
  return (
    <>
      {label && <label className="inline-block pb-1 mb-2 text-sm leading-none">{label}</label>}
      <div className="w-full flex flex-col place-items-start">
        <div className="cursor-pointer rounded-full bg-indigo-700 relative shadow-sm">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="bg-slate-100 border-gray-200 focus:border-gray-600 focus:outline-none checkbox w-6 h-6 rounded-full absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
            checked={active}
            required={required}
            onChange={onChangeHandler}
          />
          <label htmlFor="toggle" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
        </div>

        <style>
          {`
          .checkbox:checked {
              right: 0;
          }
          .checkbox:checked + .toggle-label {
              background-color: #4c51bf;
          }
          `}
        </style>
      </div>
    </>
  );
};

export default ToggleInput;