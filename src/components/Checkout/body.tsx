import { BiLock } from "react-icons/bi";
import CardForm from "./forms/Card";
import CheckoutFooter from "./footer";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";
import { emptyCart } from "../../utils/functions";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "react-toastify";
import {firebaseAddOrder} from "../../Firebase/index.js";
const Body = ({ action }: { action: any }) => {
  const [{ checkoutData, cartTotal, cartItems, foodItems }, dispatch] =
    useStateValue();
  const [loading, setLoading] = useState(false);

  const confirmOrder = () => {
    if(!checkoutData) return toast.error("Complete order info")
    setLoading(true);
    let data ={
      cartItems,
      Date: new Date().toLocaleString(),
      Status:"waiting for shipping",
    }
    firebaseAddOrder(data)
    setTimeout(async () => {
      setLoading(false);
      await emptyCart(cartItems, foodItems, dispatch);
      action(false);
      toast.success("Order completed successfuly . Waiting for our shipping.", {
        position: "top-center",
        autoClose: 6000
      });
    }, 3000);
  };
  return (
    <div className="w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col">
      <div className="min-h-[50vh] mt-5">
        { <CardForm />}
        <div className="w-full flex items-center justify-center my-2">
          <p className="text-gray-300">
            Amount Due:{" "}
            <span className="font-bold text-white">{`GH₵${cartTotal}`}</span>{" "}
          </p>
        </div>
        {/* pay now button */}

        <div className="w-full flex items-center justify-center mt-4">
          <motion.button
            onClick={confirmOrder}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-[90%] p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 transition-all duration-75 ease-in-out text-gray-50 text-lg my-2 hover:shadow-lg"
          >
            {!loading && <BiLock className="" />}
            {!loading ? (
              "CONFIRM NOW"
            ) : (
              <ImSpinner3 className="animate animate-spin" />
            )}
          </motion.button>
        </div>
      </div>
      <CheckoutFooter />
    </div>
  );
};

export default Body;
