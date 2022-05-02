import React from 'react';
import { Edit, SquarePlus } from 'tabler-icons-react';
import EditForm from './edit-form';
import NewForm from './new-form';

const Form = ({ addNewBid, editBid, cancelEditBid, activeForm, activeOrders }) => {
  return (
    <div className="card p-5">
      <div className="w-full mx-0 h-12 shadow rounded">
        <ul className="flex px-5">
          <li className={'text-sm border-indigo-600 pt-3 rounded-t text-indigo-600 mr-12'}>
            {activeForm === 'edit' ? (
              <div className="flex items-center mb-3 pr-1">
                <span>
                  <Edit strokeWidth={1.5} />
                </span>
                <span className="ml-1 font-normal">Edit</span>
              </div>
            ) : (
              <div className="flex items-center mb-3 pr-1">
                <span>
                  <SquarePlus strokeWidth={1.5} />
                </span>
                <span className="ml-1 font-normal">New</span>
              </div>
            )}
            <div className="w-full h-1 bg-indigo-600 rounded-md" />
          </li>
        </ul>
      </div>

      {activeForm === 'edit' ? (
        <EditForm editBid={editBid} cancelEditBid={cancelEditBid} order={activeOrders.filter((order) => order.selected)[0]} />
      ) : (
        <NewForm addNewBid={addNewBid} />
      )}
    </div>
  );
};

export default Form;
