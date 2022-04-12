import React, { useState } from 'react';
import { Edit, SquarePlus } from 'tabler-icons-react';
import DropdownInput from '../../resusable-controls/dropdown-input';
import EditForm from './edit-form';
import NewForm from './new-form';

const Form = () => {
  const [activeForm, setActiveForm] = useState('new');
  const bidTypeOptions = ['Single Order', 'Grouped Order', 'Hire Out'];

  return (
    <div className="card p-5">
      <div className="w-full mx-0 h-12 shadow rounded bg-white">
        <ul className="flex px-5">
          <li
            onClick={() => setActiveForm('new')}
            className={
              activeForm === 'new'
                ? 'text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12'
                : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer'
            }
          >
            <div className="flex items-center mb-3">
              <span>
                <SquarePlus strokeWidth={1.5} />
              </span>
              <span className="ml-1 font-normal">New</span>
            </div>
            {activeForm === 'new' && <div className="w-full h-1 bg-indigo-700 rounded-md" />}
          </li>
          <li
            onClick={() => setActiveForm('edit')}
            className={
              activeForm === 'edit'
                ? 'text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12'
                : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer'
            }
          >
            <div className="flex items-center mb-3">
              <span>
                <Edit strokeWidth={1.5} />
              </span>
              <span className="ml-1 font-normal">Edit</span>
            </div>
            {activeForm === 'edit' && <div className="w-full h-1 bg-indigo-700 rounded-md" />}
          </li>
        </ul>
      </div>
      <form className="grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-2">
          <DropdownInput label="Bid Type" options={bidTypeOptions} />
        </div>
        {activeForm === 'new' ? <NewForm /> : <EditForm />}
      </form>
    </div>
  );
};

export default Form;
