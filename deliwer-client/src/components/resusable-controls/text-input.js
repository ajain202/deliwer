import React from 'react';

const TextInput = ({ label, required, placeholder, value, onChangeHandler, readOnly }) => {
  return (
    <>
      {label && <label className="mb-2 inline-block text-sm leading-none">{label}</label>}
      <input
        type="text"
        tabIndex="0"
        className="w-full p-2 border rounded border-gray-200 focus:outline-none focus:border-indigo-600 text-sm font-medium leading-none"
        onChange={onChangeHandler}
        required={required}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
      />
    </>
  );
};

export default TextInput;
