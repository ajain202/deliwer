import React from 'react';
import { pastOrders } from '../dummy-data';

function OrderHistory() {
  return (
    <div className="card px-2 mt-5">
      <div className=" mt-5 w-full">
        <div className="p-3 pl-2 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-base md:text-lg lg:text-2xl font-bold leading-normal">Order History</p>
          </div>
        </div>
        <div className="bg-white shadow w-full custom-scrollbar overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none">
                <th className="font-large text-left pl-4">Order ID</th>
                <th className="font-large text-left pl-12">Amount</th>
                <th className="font-large text-left pl-12">Type of Bid</th>
                <th className="font-large text-left px-12">Drivers</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {pastOrders.map((pastOrder) => (
                <tr className="h-20 text-sm leading-none bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <p className="font-medium">{pastOrder.orderId}</p>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none">{pastOrder.amount}</p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{pastOrder.bidType}</p>
                  </td>
                  <td className="px-12">
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <img
                          className="shadow-md w-8 h-8 rounded-full"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                        />
                      </div>
                      <div className="pl-1">
                        <p className="font-medium">{pastOrder.drivers}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
