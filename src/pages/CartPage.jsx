import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, removeFromCart } from '../../app/cartSlice'
import { Link } from 'react-router-dom'

const CartPage = () => {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const discountPercent = 20
  const deliveryFee = 15

  const subtotal = cart.reduce((sum, el) => {
    return sum + el.price * el.qty
  }, 0)

  const discountPrice = (subtotal * discountPercent) / 100

  const total = subtotal - discountPrice + deliveryFee
  return (
    <>

      <div className="container mx-auto px-5 py-10 mb-30">

        <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
          <Link to={"/"}>Home</Link>
          <img src="rasm30.png" alt="" className="w-4 h-4" />
          <Link to={"/cart"}>Cart</Link>
        </div>


        <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 flex flex-col gap-4 w-full">

            {
              cart?.map((el) => (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border border-black/30 rounded-xl p-4">

                  <img
                    src={el.image}
                    alt=""
                    className="w-[110px] h-[110px] bg-[#F0EEED] p-1 rounded-[10px] "
                  />


                  <div className="w-full flex flex-col">

                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[16px]">
                        {el.title}
                      </h3>
                      <img
                        src="/rasm29.png"
                        alt=""
                        onClick={() => dispatch(removeFromCart(el.id))}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </div>

                    <span className="text-xs bg-red-100 mt-2 w-[38px] text-red-500 px-2 py-0.5 rounded-full">
                      {discountPercent}%
                    </span>
                    <span className="line-through pt-1 text-gray-400">
                      ${discountPrice.toFixed(2)}
                    </span>
                   
                    


                    <div className="flex justify-between items-center mt-1">
                      <p className="font-bold text-[20px]">${el.price}</p>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                          <button onClick={() => dispatch(decrease(el?.id))} className="px-2 text-lg">−</button>
                          <span className="px-2">

                            {el.qty}
                          </span>
                          <button onClick={() => dispatch(increase(el?.id))} className="px-2 text-lg">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }




          </div>


          <div className="border border-black/30 rounded-xl p-8 w-full max-w-[550px] mx-auto lg:mx-0">
            <h2 className="text-[24px] font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-[18px] font-bold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Discount (-{discountPercent}%)
                </span>
                <span className="text-red-500 text-[18px] font-bold">
                  -${discountPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="text-[18px] font-bold">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>

              <hr className="border-black/30" />

              <div className="flex justify-between text-base">
                <span className="font-bold text-black/50">Total</span>
                <span className="text-[18px] font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white rounded-full px-6 py-2 text-sm">
                Apply
              </button>
            </div>

            <button className="w-full mt-6 bg-black text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2">
              Go to Checkout →
            </button>
          </div>

        </div>
      </div>

    </>
  )
}

export default CartPage