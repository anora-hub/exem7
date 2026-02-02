import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGet from '../hooks/useGet';
import ProductsCart from '../companents/ProductsCart';

const CategoryPage = () => {
  const { data, isLoading, error } = useGet({ url: "products", key: ["products"] });
  const [selectedCategory, setSelectedCategory] = useState(null)
  



  const products = Array.isArray(data) ? data : data?.data;
  const categories = products?.map(p => p.category) || [];
  const allCategories = [...new Set(categories)];


  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products; 

  return (
    <section className="container mx-auto mb-50 px-5 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">

      <aside className="bg-gray-100 fixed  h-[400px] rounded-xl p-6 sticky top-30 max-w-[300px]">
        <h3 className="text-lg font-semibold mb-6">Filters</h3>

        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer hover:text-black flex justify-between items-center ${!selectedCategory ? 'font-bold' : ''}`}
            >
              All <span>›</span>
            </li>
            {allCategories.map(cat => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer hover:text-black flex justify-between items-center ${selectedCategory === cat ? 'font-bold' : ''}`}
              >
                {cat} <span>›</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>


      <main className="lg:col-span-4 bg-white rounded-xl ">
      
        <h2 className="text-3xl font-bold mb-6 text-center">
          {selectedCategory || "All Products"}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(pro => (
            <ProductsCart key={pro.id} {...pro} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default CategoryPage;

