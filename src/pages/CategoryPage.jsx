import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGet from '../hooks/useGet';
import ProductsCart from '../companents/ProductsCart';

const CategoryPage = () => {
  const { data, isLoading } = useGet({ url: "products", key: ["products"] });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false); // mobil uchun filter toggle

  const products = Array.isArray(data) ? data : data?.data;
  const categories = products?.map(p => p.category) || [];
  const allCategories = [...new Set(categories)];

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-5 py-10">

      {/* Mobile filter button */}
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-2xl font-bold">{selectedCategory || "All Products"}</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-gray-200 rounded-lg font-medium"
        >
          {showFilters ? 'Close Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="lg:flex lg:gap-10 ">

        {/* Filters */}
        <aside className={`bg-gray-100 rounded-xl p-6 mb-6 h-90 mt-16  lg:mb-0 
          ${showFilters ? 'block' : 'hidden'} lg:block lg:w-64`}>
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

        {/* Products */}
        <main className="flex-1">
          <h2 className="hidden lg:block text-3xl font-bold mb-6 text-center">
            {selectedCategory || "All Products"}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(pro => (
              <ProductsCart key={pro.id} {...pro} />
            ))}
          </div>
        </main>

      </div>
    </section>
  );
};

export default CategoryPage;


