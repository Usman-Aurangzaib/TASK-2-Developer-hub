import React, { useState } from "react";
import "@/app/globals.css";
import Footer from "@/components/layout/Footer/Footer";
import ProductList from "@/components/ProductList/page";
const Product: React.FC = () => {
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
            <div className="flex items-center flex-shrink-0">
              <a href="index.html">
                <img
                  src="/images/images(1).png"
                  alt="Logo"
                  className="h-14 mr-2"
                />
              </a>
              <span className="text-white text-lg font-semibold">
                Brand
              </span>
            </div>
            <button id="hamburger" className="lg:hidden text-white ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex-grow mx-4 hidden sm:block">
              <input
                type="text"
                id="desktopSearch"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg text-gray-800"
              />
            </div>
            <div className="sm:hidden flex-grow mx-4 mt-2">
              <input
                type="text"
                id="mobileSearch"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg text-gray-800"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="profile.html"
                className="text-white flex items-center space-x-2"
              >
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
              <a
                href="message.html"
                className="text-white flex items-center space-x-2"
              >
                <i className="fas fa-comment"></i>
                <span>Messages</span>
              </a>
              <a
                href="product.html"
                className="text-white flex items-center space-x-2"
              >
                <i className="fas fa-box"></i>
                <span>Products</span>
              </a>
              <a
                href="cart.html"
                className="cart-link text-white flex items-center space-x-4 gap-2"
              >
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
              </a>
            </div>
          </div>
          <div
            id="mobile-menu"
            className="lg:hidden bg-blue-600 text-white p-4 hidden"
          >
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
              <a href="message.html" className="flex items-center space-x-2">
                <i className="fas fa-comment"></i>
                <span>Messages</span>
              </a>
              <a href="product.html" className="flex items-center space-x-2">
                <i className="fas fa-box"></i>
                <span>Products</span>
              </a>
              <a href="cart.html" className="flex items-center space-x-2">
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container  p-4">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md mb-4 lg:mb-0">
            <h2 className="font-bold text-lg mb-4">Filter by</h2>

            {/* Filters */}
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <div>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryAll"
                    value="all"
                    className="filter-checkbox"
                    defaultChecked
                  />{" "}
                  All
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryFurniture"
                    value="furniture"
                    className="filter-checkbox"
                  />{" "}
                  Furniture
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryWatches"
                    value="watches"
                    className="filter-checkbox"
                  />{" "}
                  Watches
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categorySmartphones"
                    value="smartphones"
                    className="filter-checkbox"
                  />{" "}
                  Smartphones
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryLadiesClothes"
                    value="ladies clothes"
                    className="filter-checkbox"
                  />
                  Ladies Clothes
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryGentsClothes"
                    value="gentsClothes"
                    className="filter-checkbox"
                  />
                  Gents Clothes
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryCrockery"
                    value="crockery"
                    className="filter-checkbox"
                  />
                  Crockery
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryJewelry"
                    value="jewelry"
                    className="filter-checkbox"
                  />
                  Jewellery
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryElectronics"
                    value="electronics"
                    className="filter-checkbox"
                  />
                  Electronics
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryKids"
                    value="kids"
                    className="filter-checkbox"
                  />
                  Kids
                </label>
                <label className="block mb-1">
                  <input
                    type="checkbox"
                    id="categoryPlants"
                    value="plants"
                    className="filter-checkbox"
                  />
                  Plants
                </label>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                id="priceRange"
                min="0"
                max="1000"
                step="10"
                className="w-full"
              />
              <p id="priceValue" className="text-sm mt-2">
                Price: $0 - $1000
              </p>
            </div>
          </aside>

          <div className="w-full flex flex-col lg:flex-row  lg:w-3/4 p-4">
            <div
              id="productGrid"
            >
              <ProductList/>
              {/* Products will be dynamically rendered */}
            </div>
          </div>
        </div>
      </main>



      <Footer/>


    </div>
  );
};

export default Product;
