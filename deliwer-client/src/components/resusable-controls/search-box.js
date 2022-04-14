import React from 'react';
import { Search } from 'tabler-icons-react';
import TextInput from './text-input';

const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <>
      <div className="bg-white w-full mx-auto">
        <div className=" flex justify-start items-center relative">
          <TextInput placeholder={placeholder} onChangeHandler={onChangeHandler} />
          <Search className="absolute right-3 top-[0.7rem] z-10 cursor-pointer" strokeWidth={1.4} />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
