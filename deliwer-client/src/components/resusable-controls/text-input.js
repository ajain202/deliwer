import React from 'react';

const TextInput = ({ label, required, placeholder, onChangeHandler }) => {
  return (
    <>
      {label && <label className="mb-3 inline-block text-sm leading-none text-gray-800">{label}</label>}
      <input
        type="text"
        tabIndex="0"
        className="w-full p-3 bg-white border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
        onChange={onChangeHandler}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
