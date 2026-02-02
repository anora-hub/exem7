import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCart = ({ title, image, price = 0, rating, id }) => {
    const discount = 20
    const newPrice = (
        price - (price * discount) / 100
    ).toFixed(2)

    return (
        <div>
            <Link
                to={`/products/${id}`}
                className="bg-[#f3f3f3] rounded-2xl p-6 flex justify-center"
            >
                <img
                    src={image}
                    alt={title}
                    className="h-44 object-contain"
                />
            </Link>

            <h3 className="mt-4 font-semibold line-clamp-1">
                {title}
            </h3>

            <div className="flex items-center gap-2 text-sm mt-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500">{rating?.rate}/5</span>
            </div>

            <div className="flex items-center gap-2 mt-1">
                <span className="font-bold">${price}</span>
                <span className="line-through text-gray-400">
                    ${newPrice}
                </span>
                <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                    {discount}%
                </span>
            </div>
        </div>
    )
}

export default ProductsCart
