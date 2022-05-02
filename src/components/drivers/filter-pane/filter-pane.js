import React from 'react';
import RadioInput from '../../resusable-controls/radio-input';
import SearchBox from '../../resusable-controls/search-box';
import ToggleInput from '../../resusable-controls/toggle-input';

const FilterPane = ({ onFilterChangeHandler, onFavoriteClickHandler, sortByValue, setSortByValue }) => {
  const sortOptions = [{ label: 'Ratings' }, { label: 'Orders delivered for you' }, { label: 'Total orders delivered' }];

  return (
    <div className="h-full card p-5">
      <SearchBox onChangeHandler={onFilterChangeHandler} placeholder="Driver Name" />
      <p className="text-lightest-navy text-base font-semibold leading-4 pb-4 mt-6">Favorites</p>
      <ToggleInput onChangeHandler={onFavoriteClickHandler} />
      <p className="text-lightest-navy text-base font-semibold leading-4 py-4 mt-5">Sort By</p>
      <RadioInput
        options={sortOptions}
        value={sortByValue}
        onChangeHandler={(e) => {
          return setSortByValue(e.target.value);
        }}
      />
    </div>
  );
};

export default FilterPane;
