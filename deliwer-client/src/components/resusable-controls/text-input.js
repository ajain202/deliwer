import React from 'react';

const TextInput = ({ label, required, placeholder, value, onChangeHandler }) => {
  return (
    <>
      {label && <label className="mb-2 inline-block text-sm leading-none">{label}</label>}
      <input
        type="text"
        tabIndex="0"
        className="w-full p-2 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
        onChange={onChangeHandler}
        required={required}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default TextInput;
