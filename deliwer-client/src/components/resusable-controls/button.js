import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
    >
      {label}
    </button>
  );
};

export default Button;
