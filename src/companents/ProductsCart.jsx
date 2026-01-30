import React from 'react'

const ProductsCart = ({title,image , price ,rating}) => {
    const discount = 20
    const newPrice = (
        price - (price * discount) / 100
    ).toFixed(2)
  return (
      <div>
          <div class="bg-[#f3f3f3] rounded-2xl p-6 flex justify-center">
              <img src={image} alt="" class="h-44 object-contain" />
          </div>

          <h3 class="mt-4 font-semibold">{title}</h3>

          <div class="flex items-center gap-2 text-sm mt-1">
              <span class="text-yellow-400">★★★★★</span>
              <span class="text-gray-500">{rating?.rate}/5</span>
          </div>

          <div class="flex items-center gap-2 mt-1">
              <span class="font-bold">${price}</span>
              <span class="line-through text-gray-400">${newPrice}</span>
              <span class="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">{discount}%</span>
          </div>
      </div>
  )
}

export default ProductsCart