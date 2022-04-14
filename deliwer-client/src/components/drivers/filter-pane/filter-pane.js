import React from 'react';
import RadioInput from '../../resusable-controls/radio-input';
import SearchBox from '../../resusable-controls/search-box';
import ToggleInput from '../../resusable-controls/toggle-input';

const FilterPane = () => {
  const sortOptions = [{ label: 'Ratings' }, { label: 'Orders delivered for you' }, { label: 'Total orders delivered' }];

  return (
    <div className="h-full card p-5">
      <SearchBox placeholder="Driver Name" />
      <p class="text-lg leading-4 pb-4 mt-6 font-medium text-gray-600">Favorites</p>
      <ToggleInput />
      <p class="text-lg leading-4 py-4 mt-5 font-medium text-gray-600">Sort By</p>
      <RadioInput options={sortOptions} />
    </div>
  );
};

export default FilterPane;
