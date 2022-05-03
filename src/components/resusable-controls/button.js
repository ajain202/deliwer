import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      name={label}
      type="submit"
      className="px-5 py-2 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 rounded text-white text-sm"
    >
      {label}
    </button>
  );
};

export default Button;
