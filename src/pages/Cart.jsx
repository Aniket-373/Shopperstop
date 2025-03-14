import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//import { StripeCheckout } from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';

const Cart = () => {
  const productData = useSelector((state)=>state.shoperstop.productData);
  const userInfo = useSelector((state)=>state.shoperstop.userInfo)
  const [totalAmt,setTotalAmt]=useState("");
  const [payNow, setPayNow]=useState(false);

  useEffect(()=>{
    let price=0;
    productData.map((item)=>{
      price += item.price * item.quantity
      return price;
    })
    setTotalAmt(price.toFixed(2))
  },[productData])

  const handleCheckOut=()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Please sign in to Checkout")
    }
  }

  return (
    <div>
    <div>
      <img className="w-full h-60 object-cover" src="https://images.pexels.com/photos/8938722/pexels-photo-8938722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cartimg" />
    </div>
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] py-6 px-4 ">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">cart totals</h2>
          <p className="flex items-center gap-4 text-base">
            SubTotal{" "}
            <span className="font-titleFont font-bold text-lg">
              ${totalAmt}
            </span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quibusdam.
            </span>
          </p>
        </div>
        <p className="font-titleFont font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">${totalAmt} </span>
        </p>
        <button onClick={handleCheckOut} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">proceed to checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Cart
