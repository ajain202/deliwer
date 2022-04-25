import React from 'react';
import Button from '../../resusable-controls/button';
import DropdownInput from '../../resusable-controls/dropdown-input';
import TextInput from '../../resusable-controls/text-input';
import ToggleInput from '../../resusable-controls/toggle-input';

const EditForm = () => {
  const bidActiveDurationOptions = ['10 min', '15 min', '20 min', '25 min', '30 min'];

  return (
    <>
      <div>
        <TextInput label="Bid Amount" required />
      </div>
      <div>
        <DropdownInput label="Bid Active Duration" options={bidActiveDurationOptions} />
      </div>
      <div>
        <TextInput label="Location" required />
      </div>
      <div>
        <ToggleInput label="Send to Favorites" required />
      </div>
      <div className="mt-3 flex justify-around">
        <div>
          <Button label={'Cancel'} />
        </div>
        <div>
          <Button label={'Place Bid'} />
        </div>
      </div>
    </>
  );
};

export default EditForm;
