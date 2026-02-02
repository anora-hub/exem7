import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import useGet from '../hooks/useGet'

const Header = () => {
    const cart = useSelector((state) => state.cart)
   
    const { data, isLoading } = useGet({ url: "products", key: ["products"] })
    const[search , setSearch] = useState("")

    const products = data?.data
    return (
        <>
            <header className='fixed w-full z-40'>
                <div className='bg-black'>
                    <div class=" container mx-auto py-2 px-5 bg-black text-white text-center text-sm py-2">
                        Sign up and get 20% off your first order.
                        <a href="#" class="underline font-medium">      Sign Up Now</a>
                    </div>
                </div>
                <header class="">




                    <div className=' bg-[white]'>
                        <div class="container mx-auto px-5 mx-auto flex items-center justify-between  py-4">

                            <Link to={"/"} class="text-2xl font-extrabold">
                                SHOP.CO
                            </Link>


                            <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
                                <select className='hover:text-gray-600'>
                                    <option value="Shop">Shop</option>
                                </select>
                                <NavLink className=' text-black hover:text-gray-600' >On Sale</NavLink>
                                <NavLink className='hover:text-gray-600  text-black' >New Arrivals</NavLink>
                                <NavLink className='hover:text-gray-600  text-black' >Brands</NavLink>
                            </nav>


                            <div class="flex items-center space-x-8">
                                <div>

                                    <div class="relative hidden md:block">
                                        <input
                                            value={search}
                                            onChange={(e) => setSearch(e?.target?.value)}
                                            type="text"
                                            placeholder="Search for products..."
                                            class="pl-14 pr-8 py-3 w-150 rounded-full bg-gray-100 text-sm
           focus:outline-none focus:ring-2 focus:ring-black"
                                        />

                                        <svg
                                            class="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2
           text-gray-500 pointer-events-none"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 12.65z" />
                                        </svg>
                                    </div>
                                   {
                                        search === "" ? "" : <div className='bg-white  h-[350px] overflow-y-scroll overflow-x-hidden p-5 flex flex-col gap-2  shadow-2xl shadow-black w-[610px] absolute mt-[15px] rounded-2xl '>
                                            {products
                                                ?.filter((item) =>
                                                    item?.title
                                                        ?.toLowerCase()
                                                        .includes(search.toLowerCase())
                                                ).length>0?
                                                products
                                                    ?.filter((item) =>
                                                        item?.title
                                                            ?.toLowerCase()
                                                            .includes(search.toLowerCase())
                                                    )
                                                    ?.map((el) => (
                                                        <Link onClick={()=> setSearch("")} to={`/products/${el.id}`}
                                                            
                                                            className="bg-gray-200 rounded-2xl flex gap-2 p-3"
                                                        >
                                                            <img
                                                                className="w-[60px] h-[60px] object-cover rounded"
                                                                src={el.image}
                                                                alt={el.title}
                                                            />
                                                            <div>
                                                                <h1 className="font-bold line-clamp-1">
                                                                    {el.title}
                                                                </h1>
                                                                <p className="line-clamp-2 text-sm text-gray-600">
                                                                    {el.description}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )):"bunday mahsulot topilmadi"
                                            }

                                        </div>                                   }
                                </div>



                                <div className="relative inline-block">
                                    <Link to={`/cart`}>
                                        <img src="/rasm1.png" alt="" />
                                    </Link>

                                    <span className="absolute bottom-3 right-0 m-left-2 px-0.5 bg-black  text-white text-xs px-1  rounded-full">
                                        {cart.length}
                                    </span>
                                </div>

                                <Link to={"cart"}>
                                    <img src="rasm2.png" alt="" />
                                </Link>


                            </div>
                        </div>
                    </div>
                </header>
            </header>
        </>

    )
}

export default Header