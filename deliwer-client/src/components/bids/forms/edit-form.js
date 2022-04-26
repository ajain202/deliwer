import React, { useState, useEffect } from 'react';
import Button from '../../resusable-controls/button';
import DropdownInput from '../../resusable-controls/dropdown-input';
import TextInput from '../../resusable-controls/text-input';
import ToggleInput from '../../resusable-controls/toggle-input';

const EditForm = ({ order, editBid, cancelEditBid }) => {
  const [bid, setBid] = useState({ ...order });

  useEffect(() => {
    setBid({ ...order });
  }, [order]);

  const bidTypeOptions = ['Single Order', 'Grouped Order', 'Hire Out'];
  const bidActiveDurationOptions = ['10 min', '15 min', '20 min', '25 min', '30 min'];
  const { orderId, bidType, bidAmount, bidActiveDuration, location, sendToFavorites } = bid;

  const onSubmitHandler = (e, order) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === 'Update Bid') {
      editBid(order);
    } else {
      cancelEditBid();
    }
    setBid({
      orderId: '',
      bidType: '',
      bidAmount: '',
      bidActiveDuration: '',
      location: '',
      sendToFavorites: false,
    });
  };

  return (
    <>
      <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => onSubmitHandler(e, bid)}>
        <div>
          <TextInput label="Order Id" value={orderId} readOnly />
        </div>
        <div>
          <DropdownInput
            label="Bid Type"
            value={bidType}
            setValue={(value) => {
              console.log('value', value);
              return setBid({ ...bid, bidType: value });
            }}
            options={bidTypeOptions}
          />
        </div>
        <div>
          <TextInput label="Bid Amount" value={bidAmount} onChangeHandler={(e) => setBid({ ...bid, bidAmount: e.target.value })} required />
        </div>
        <div>
          <DropdownInput
            label="Bid Active Duration"
            value={bidActiveDuration}
            setValue={(value) => setBid({ ...bid, bidActiveDuration: value })}
            options={bidActiveDurationOptions}
          />
        </div>
        <div>
          <TextInput label="Location" value={location} onChangeHandler={(e) => setBid({ ...bid, location: e.target.value })} required />
        </div>
        <div>
          <ToggleInput
            label="Send to Favorite Drivers"
            active={sendToFavorites}
            onChangeHandler={() => setBid({ ...bid, sendToFavorites: !sendToFavorites })}
            required
          />
        </div>
        <div className="mt-3 flex justify-around">
          <div>
            <Button label={'Cancel'} />
          </div>
          <div>
            <Button label={'Update Bid'} />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditForm;
