import React, { useState } from "react";
import { pastOrders } from "../dummy-data";

function OrderHistory() {
  const [show, setShow] = useState(null);
  return (
    <>
      <div className="card mt-5 w-full">
        <div className="card bg-white shadow w-full custom-scrollbar overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-large text-left pl-4">Order ID</th>
                <th className="font-large text-left pl-12">Amount</th>
                <th className="font-large text-left pl-12">Type of Bid</th>
                <th className="font-large text-left pl-12">Location</th>
                <th className="font-large text-left px-12">Drivers</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {pastOrders.map((pastOrder) => (
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <p className="font-medium">{pastOrder.orderId}</p>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {pastOrder.amount}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{pastOrder.bidType}</p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{pastOrder.address}</p>
                    <p> {pastOrder.city}</p>
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
    </>
  );
}

export default OrderHistory;
