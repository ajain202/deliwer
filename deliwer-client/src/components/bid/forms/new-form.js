import React from 'react';
import Button from '../../resusable-controls/button';
import DropdownInput from '../../resusable-controls/dropdown-input';
import TextInput from '../../resusable-controls/text-input';

const NewForm = () => {
  const bidActiveDurationOptions = ['10 min', '15 min', '20 min', '25 min', '30 min'];

  return (
    <>
      <div className="col-span-2 sm:col-span-1">
        <TextInput label="Bid Amount" required />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <DropdownInput label="Bid Active Duration" options={bidActiveDurationOptions} />
      </div>
      <div className="col-span-2">
        <TextInput label="Location" required />
      </div>
      <div className="mt-3 col-span-2 flex justify-center">
        <div className="mr-3">
          <Button label={'Send to Favorites'} />
        </div>
        <div className="ml-3">
          <Button label={'Place Bid'} />
        </div>
      </div>
    </>
  );
};

export default NewForm;
