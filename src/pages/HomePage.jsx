import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import ProductsCart from '../companents/ProductsCart';
import useGet from '../hooks/useGet';
import { Link } from 'react-router-dom';

const HomePage = () => {
 
    const { data , isLoading} = useGet({url:"products" , key:["products"]})
   
    const products = data?.data
    const categories = products?.map((el) => {
        return el.category
    })
    const allCategories = [...new Set(categories)]

    console.log(allCategories);
    console.log(data?.data);
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">Loading products...</p>
            </div>
        )
    }
   

    return (
        <>
            <main className="overflow-x-hidden">
                <section className=" bg-[#F2F0F1] overflow-hidden">
                    <div className=" container mx-auto   px-5  ">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">


                            <div className='mt-20' >
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                                    <span className="relative inline-block">
                                        FIND CLOTHES
                                        <span className="absolute left-0 bottom-1 w-full h-1"></span>
                                    </span><br />
                                    <span className="relative inline-block">
                                        THAT MATCHES
                                        <span className="absolute left-0 bottom-1 w-full h-1"></span>
                                    </span><br />
                                    <span className="relative inline-block">
                                        YOUR STYLE
                                        <span className="absolute left-0 bottom-1 w-full h-1"></span>
                                    </span>
                                </h1>

                                <p className="mt-6 text-gray-600 max-w-md">
                                    Browse through our diverse range of meticulously crafted garments,
                                    designed to bring out your individuality and cater to your sense of style.
                                </p>

                                <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                    Shop Now
                                </button>


                                <div className="mt-10 flex flex-wrap gap-8 items-center">
                                    <div>
                                        <h3 className="text-[35px] font-bold">200+</h3>
                                        <p className="text-sm text-gray-500">International Brands</p>
                                    </div>
                                    <img src="rasm3.png" alt="" />
                                    <div>
                                        <h3 className="text-[35px] font-bold">2,000+</h3>
                                        <p className="text-sm text-gray-500">High-Quality Products</p>
                                    </div>
                                    <img src="rasm3.png" alt="" />
                                    <div>
                                        <h3 className="text-[35px] font-bold">30,000+</h3>
                                        <p className="text-sm text-gray-500">Happy Customers</p>
                                    </div>
                                </div>
                            </div>


                            <div className="relative flex justify-center lg:justify-end">

                                <img className='w-full max-w-[600px] h-auto' src="rasm3.jpg" alt="" />

                                <span className="hidden lg:block absolute top-10 right-10 text-9xl">✦</span>
                                <span className="hidden lg:block absolute bottom-16 left-10 text-7xl">✦</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-black py-6">
                        <div
                            className="container mx-auto px-5
           grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
           gap-6 justify-between"
                        >
                            <img src="rasm4.png" alt="Versace" className="h-6 sm:h-7 md:h-8 object-contain" />
                            <img src="rasm5.png" alt="Zara" className="h-6 sm:h-7 md:h-8 object-contain" />
                            <img src="rasm6.png" alt="Gucci" className="h-6 sm:h-7 md:h-8 object-contain" />
                            <img src="rasm7.png" alt="Prada" className="h-6 sm:h-7 md:h-8 object-contain" />
                            <img src="rasm8.png" alt="Calvin Klein" className="h-6 sm:h-7 md:h-8 object-contain" />
                        </div>
                    </div>

                </section>
                <section className="container mx-auto px-5 py-16">


                    {allCategories?.map((el) => {
                        return (
                            <div>
                               
                                <div className="mt-8 flex justify-center">
                                   
                                </div>
                                <h2 className="text-center text-6xl font-extrabold mt-8 mb-10">{el} </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                                    {
                                        products?.filter((products) => products.category === el).slice(0,4)?.map((pro) => (

                                            <ProductsCart {...pro} />
                                        ))
                                    }


                                  




                                </div>
                                  <div className="flex justify-center mt-6">
                                    <Link to={"category"} className="px-8 py-3 border rounded-full hover:bg-black hover:text-white transition">
                                            View All
                                        </Link>
                                    </div>
                            </div>
                        )
                    }
                    )
                    }


                </section>
              <section>
        <div className="container mx-auto px-5 max-w-[1440px] w-full bg-[#F0F0F0] rounded-2xl pb-20 my-[90px] ">
          <h1 className="max-[900px]:text-[32px] max-[600px]:text-[24px] text-[40px]  font-bold uppercase text-center pt-10">
            BROWSE BY DRESS STYLE
          </h1>

                        <div className="pt-10 lg:pt-20 px-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">

                                {/* Casual */}
                                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-full h-[300px] sm:h-[300px] flex items-center">
                                    <div className="p-6 z-10">
                                        <h3 className="text-[24px] sm:text-[32px] font-bold">Casual</h3>
                                    </div>
                                    <img
                                        src="resm11.png"
                                        alt="Casual"
                                        className="absolute right-0 bottom-0 w-[45%] h-full object-cover"
                                    />
                                </div>

                                {/* Formal */}
                                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-full h-[300px] sm:h-[300px] flex items-center">
                                    <div className="p-6 z-10">
                                        <h3 className="text-[24px] sm:text-[32px] font-bold">Formal</h3>
                                    </div>
                                    <img
                                        src="rasm11.png"
                                        alt="Formal"
                                        className="absolute right-0 bottom-0 w-[45%] h-full object-cover"
                                    />
                                </div>

                                {/* Party */}
                                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-full h-[300px] sm:h-[300px] flex items-center">
                                    <div className="p-6 z-10">
                                        <h3 className="text-[24px] sm:text-[32px] font-bold">Party</h3>
                                    </div>
                                    <img
                                        src="rasm12.png"
                                        alt="Party"
                                        className="absolute right-0 bottom-0 w-[45%] h-full object-cover"
                                    />
                                </div>

                                {/* Gym */}
                                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-full h-[300px] sm:h-[300px] flex items-center">
                                    <div className="p-6 z-10">
                                        <h3 className="text-[24px] sm:text-[32px] font-bold">Gym</h3>
                                    </div>
                                    <img
                                        src="resm13.png"
                                        alt="Gym"
                                        className="absolute right-0 bottom-0 w-[45%] h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>


        </div>
      </section>

                <section className=" container  mb-[110px] mx-auto px-5 py-12">

                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            OUR HAPPY CUSTOMERS
                        </h2>

                       
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="border border-[1px] border-black/30 rounded-2xl p-6 bg-white">
                            <img className='pb-3' src="rasm14.png" alt="" />

                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="font-semibold text-2xl">Sarah M.</h4>
                                <img src="rasm15.png" alt="" />
                            </div>

                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                I'm blown away by the quality and style of the clothes I received
                                from Shop.co. From casual wear to elegant dresses, every piece I've
                                bought has exceeded my expectations.
                            </p>
                        </div>


                        <div className="border border-[1px] border-black/30 rounded-2xl p-6 bg-white">
                            <img className='pb-3' src="rasm14.png" alt="" />

                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="font-semibold text-2xl">Alex K.</h4>
                                <img src="rasm15.png" alt="" />
                            </div>

                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                            </p>
                        </div>


                        <div className="border border-[1px] border-black/30 rounded-2xl p-6 bg-white">
                            <img className='pb-3' src="rasm14.png" alt="" />

                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="font-semibold text-2xl">James L.</h4>
                                <img src="rasm15.png" alt="" />
                            </div>

                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                            </p>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage