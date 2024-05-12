import { MdDeleteForever } from "react-icons/md";
import {BiEditAlt} from "react-icons/bi";
import React from "react";
import { useStateValue } from "../../../context/StateProvider";
const Order = ({item}: {item:any}) => {
  const [{checkoutData}, dispatch] = useStateValue();
  const order_date=Date.now();
  const updateCheckoutData = (key:string, val:string) => {
    dispatch({
      type: "UPDATE_CHECKOUT_DATA",
      checkoutData: {
        ...checkoutData,
        [key]:val
      }
    });
  }
  return (
      <div className="max-w-sm h-auto rounded-lg border border-orange-50 bg-orange-600">
          <div className="flex flex-col items-center justify-center">
          <span className="text-sm text-gray-300 ">{item?.uid}</span>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {item?.displayName }
            </h5>
            <span className="text-sm text-gray-300 ">{order_date}</span>
            <label
        htmlFor="provider"
        className="font-bold text-sm mb-1 text-gray-100"
      >
        Select Status
      </label>
      <select
        id="Status"
        className="w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-orange-500 focus:text-orange-500 bg-cartItem transition-colors"
        onChange={(e) => updateCheckoutData("Status", e.target.value)}
      >
        <option value="default" selected disabled>Waiting for shipping</option>
        <option value="1">Waiting for shipping</option>
        <option value="2">Done</option>
        <option value="3">Cancel</option>

      </select>
          </div>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <p
                className="inline-flex items-center py-2 px-4 text-xl font-medium text-center text-white shadow-lg rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer"
                title="Delete"
            >
              <MdDeleteForever />
            </p>
            <p
                className="inline-flex items-center py-2 px-4 text-xl font-medium text-center text-gray-900 shadow-lg bg-primary hover:bg-white rounded-lg cursor-pointer  "
                title="Confirm"
            >
              <BiEditAlt />
            </p>
          </div>
        </div>
  )
}

export default Order;