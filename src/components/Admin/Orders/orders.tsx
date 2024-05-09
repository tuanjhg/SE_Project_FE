import { MdDeleteForever } from "react-icons/md";
import {motion} from "framer-motion";
import { BiEditAlt } from "react-icons/bi";
const Order = ({item}: {item:any}) => {
  return (
    <div className="max-w-sm h-auto rounded-lg border border-orange-50 bg-orange-600">
    <div className="flex flex-col gap-1 items-center pb-10">
      <motion.img
        whileHover= {{scale:1.1}}
        className="mb-3 w-24 h-24 rounded-full shadow-lg cursor-pointer object-contain"
        src={item?.id } 
        alt="avatar"
      />
      <div className="flex flex-col items-center justify-center">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item?.user_id || 'User Id'}
        </h5>
        <span className="text-sm text-gray-300 ">{item?.order_date}</span>
        <span className="text-sm text-gray-300 ">{item?.status}</span>
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
          title="Disable"
        >
          <BiEditAlt />
        </p>
      </div>
    </div>
  </div>
  )
}

export default Order