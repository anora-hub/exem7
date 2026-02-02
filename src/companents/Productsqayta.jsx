import React from 'react'

const Productsqayta = ({ images ,}) => {
  return (
    
    <>
          <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex gap-1 mb-3 text-yellow-400">
                  <img src={images} alt="" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                  <p className="font-medium">Samantha D.</p>
                  <span className="bg-green-500 text-white text-xs rounded-full px-1">✓</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                  I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
              </p>
              <p className="text-xs text-gray-400">Posted on August 14, 2023</p>
          </div>
    </>
  )
}

export default Productsqayta