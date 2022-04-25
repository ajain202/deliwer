import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="px-5 py-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white text-sm"
    >
      {label}
    </button>
  );
};

export default Button;
