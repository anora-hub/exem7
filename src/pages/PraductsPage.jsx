
import Productsqayta from '../companents/Productsqayta'
import { useParams } from 'react-router-dom'

import useGet from '../hooks/useGet'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrease, increase } from '../../app/cartSlice'
import ProductsCart from '../companents/ProductsCart'

const PraductsPage = () => {

const {id} = useParams()
const dispatch = useDispatch()
const cart = useSelector((state => state.cart))

  const { data, isLoading, isError } = useGet({ url: `products/${id}`, key: ["product", id] })
  
  
  const singleProducts = data?.data

  const discount = 20
  const price = singleProducts?.price || 0

  const newPrice = (
    price - (price * discount) / 100
  ).toFixed(2)



  const { data: allProducts } = useGet({ url: "products", key: ["products"] })
  const products = allProducts?.data

  const relatedProducts = products?.filter(
    (p) => p.category === singleProducts?.category && p.id !== singleProducts?.id
  )

  return (
  <>
      <div className="container mx-auto px-5 py-10 pb-20">

        <div className="text-sm text-gray-400 mb-6 flex items-center gap-5">
          <p>Home</p>
          <p>Shop</p>
          <p>Men</p>
          <p>T-shirts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="flex gap-6">




            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center w-full">
              <img className="max-h-[420px]" src={singleProducts?.image} />
            </div>
          </div>


          <div>
            <h1 className="text-5xl font-bold mb-3">
              {singleProducts?.title}
            </h1>


            <div className="flex items-center gap-4 mb-4">
              <img src="rasm27.png" alt="" />
              <span className="text-[18px] font-bold text-gray-500">{singleProducts?.rating?.rate}/5</span>
            </div>


            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">${price}</span>
              <span className="line-through text-2xl font-bold text-gray-400">
                ${newPrice}
              </span>
              <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded-full">
                {discount}%
              </span>
            </div>

            <p className="text-gray-500 mb-6">
              {singleProducts?.description}
            </p>
            <img className='my-3' src="rasm28.png" alt="" />

            <div className="mb-6">
              <p className="font-medium mb-2">Select Colors</p>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-[#4F4631] ring-2 ring-[#4F4631]"></span>
                <span className="w-8 h-8 rounded-full bg-green-700"></span>
                <span className="w-8 h-8 rounded-full bg-gray-800"></span>
              </div>
            </div>

          
         


            <div className="flex gap-4">
              

              {cart?.find((el) => el.id === singleProducts?.id) ? (
                <div class="flex items-center w-full max-w-xl rounded-full overflow-hidden border border-gray-300">
                  <button onClick={() => dispatch(decrease(singleProducts?.id))} class="flex-1 bg-gray-100 text-black text-lg font-bold py-3 hover:bg-gray-200 transition">
                    −
                  </button>

                  <span class="flex-1 text-center text-lg font-semibold py-3 bg-white">
                    {
                      cart?.find((el)=> el.id === singleProducts.id)?.qty
                    }
                  </span>

                  <button    
                  onClick={()=> dispatch(increase(singleProducts?.id))}
                  class="flex-1 bg-gray-100 text-black text-lg font-bold py-3 hover:bg-gray-200 transition">
                    +
                  </button>
                </div>


              ) : (
                <button
                  onClick={() => dispatch(addToCart(singleProducts))}
                  className="flex-1 bg-black max-w-xl text-white rounded-full py-3"
                >
                  Add to Cart
                </button>
              )}


            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto pb-[40px]  px-5 py-10">
        <div className="w-full border-b  border-gray-200">
          <div className=" mx-auto flex  justify-center gap-16 text-sm text-gray-400">

            <button className="py-4 hover:text-gray-700">
              Product Details
            </button>

            <button className="py-4 text-black border-b-2 border-black font-medium">
              Rating & Reviews
            </button>

            <button className="py-4 hover:text-gray-700">
              FAQs
            </button>

          </div>
        </div>

        <div className="flex items-center justify-between pt-[30px] mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            All Reviews <span className="text-gray-400 font-normal">(451)</span>
          </h2>

          <div className="flex items-center gap-3">
            <button className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Latest
            </button>

            <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800">
              Write a Review
            </button>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
         <Productsqayta />
          <Productsqayta />
          <Productsqayta />
          <Productsqayta />
          <Productsqayta />
          <Productsqayta />

      
          
        </div>

        
        <div className="flex justify-center mt-8">
          <button className="border border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-50">
            Load More Reviews
          </button>
        </div>
      </div>

      {relatedProducts?.length > 0 && (
        <div className='container mx-auto pb-[200px]  px-5'>
          <h2 className="text-center text-6xl font-extrabold mt-8 mb-10">
            Related Products
          </h2>
          <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((pro) => (
              <ProductsCart key={pro.id} {...pro} />
            ))}
          </div>
        </div>
      )}





  </>
    

  )
}

export default PraductsPage