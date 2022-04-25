import React from 'react';
import Button from '../../resusable-controls/button';
import DropdownInput from '../../resusable-controls/dropdown-input';
import TextInput from '../../resusable-controls/text-input';
import ToggleInput from '../../resusable-controls/toggle-input';

const NewForm = ({ order, setOrder }) => {
  const bidActiveDurationOptions = ['10 min', '15 min', '20 min', '25 min', '30 min'];
  const { bidAmount, bidActiveDuration, location, sendToFavorites } = order;
  return (
    <>
      <div>
        <TextInput
          label="Bid Amount"
          value={bidAmount}
          onChangeHandler={(bidAmount) => setOrder({ ...order, bidAmount: bidAmount.target.value })}
          required
        />
      </div>
      <div>
        <DropdownInput
          label="Bid Active Duration"
          value={bidActiveDuration}
          setValue={(value) => setOrder({ ...order, bidActiveDuration: value })}
          options={bidActiveDurationOptions}
        />
      </div>
      <div>
        <TextInput
          label="Location"
          value={location}
          onChangeHandler={(location) => setOrder({ ...order, location: location.target.value })}
          required
        />
      </div>
      <div>
        <ToggleInput
          label="Send to Favorites"
          active={sendToFavorites}
          onChangeHandler={() => setOrder({ ...order, sendToFavorites: !sendToFavorites })}
          required
        />
      </div>
      <div className="text-center mt-3">
        <Button label={'Place Bid'} />
      </div>
    </>
  );
};

export default NewForm;
