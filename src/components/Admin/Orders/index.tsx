import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useStateValue } from "../../../context/StateProvider";
import Order from "./orders";


const Orders = () => {
  const [{ orders }, dispatch] = useStateValue();
  const [query, setQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  
  const filterUsers = () => {
      if(query.length === 0) {
        setFilteredOrders(orders);
      }else{
        const filter = orders.filter((item:any) => item.displayName.toLowerCase().includes(query.toLowerCase()));
        setFilteredOrders(filter);
      }
  }
  const searchOrders = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      filterUsers();
  }
  return (
    <div className="w-full justify-center flex flex-col">
      {/* search bar */}
      <div className="w-full flex justify-center p-2 bg-white mb-4 rounded-lg">
        <input
          className="w-full p-2 outline-none rounded-lg "
          type="text"
          placeholder="Search order"
          value={query}
          onChange={(e) => searchOrders(e)}
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 text-orange-700 font-bold py-2 px-4 rounded-lg">
          <FaSearch />
        </button>
      </div>

      {/* dasboard statistics and counts */}
      <div className="w-full grid grid-cols-3 gap-1">
        {
          filteredOrders.map((order:any) => (
            <Order key={order.id} item={order}/>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;
