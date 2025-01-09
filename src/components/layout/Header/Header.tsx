"use client";
import React, { useState } from "react";
import { User, MessageCircle, Package, ShoppingCart } from "lucide-react";
import Product from "@/pages/product";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setCategoriesMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState({ symbol: "$", code: "USD" });
  const [shipTo, setShipTo] = useState({
    country: "US",
    flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  });

  return (
    <>
      {/* Navbar start */}
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
          {/* Logo and Name */}
          <div className="flex items-center flex-shrink-0">
            <a href="index.html">
              <img
                src="assest/images/logoo.png"
                alt="Logo"
                className="h-14 mr-2"
              />
            </a>
            <span className="text-white text-lg font-semibold"></span>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white ml-4"
          >
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex-grow mx-4 hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg text-gray-800"
            />
          </div>

          {/* Right-side Links */}

          <div className="hidden lg:flex items-center space-x-4">
            {["profile", "message", "product", "cart"].map((item) => (
              <Link
                key={item}
                href={`/${item}`} // Correct routing path
                className="text-white flex items-center space-x-2"
              >
                <i
                  className={`fas fa-${
                    item === "cart" ? "shopping-cart" : item
                  }`}
                ></i>
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </Link>
            ))}
          </div>

          {/* <div className="hidden lg:flex items-center space-x-4">
            {['profile', 'message', 'product', 'cart'].map((item) => (
              <a key={item} href={`${item}.tsx`} className="text-white flex items-center space-x-2">
                <i className={`fas fa-${item === 'cart' ? 'shopping-cart' : item}`}></i>
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </a>
            ))}
          </div> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-600 text-white p-4">
            <div className="flex flex-col space-y-4">
              {["profile", "message", "product", "cart"].map((item) => (
                <a
                  key={item}
                  href={`${item}.html`}
                  className="flex items-center space-x-2"
                >
                  <i
                    className={`fas fa-${
                      item === "cart" ? "shopping-cart" : item
                    }`}
                  ></i>
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Categories Section */}
      <div className="bg-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesMenuOpen(!isCategoriesMenuOpen)}
              className="text-blue-600 flex items-center space-x-2"
            >
              <span>All Categories</span>
              <i className="fas fa-bars"></i>
            </button>
            {isCategoriesMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="flex flex-col">
                  {[
                    "Categories",
                    "Furniture",
                    "Watches",
                    "Smartphones",
                    "Ladies Clothes",
                    "Gents Clothes",
                    "Crockery",
                    "Jewellery",
                    "Electronics",
                    "Kids",
                    "Laptops",
                  ].map((category) => (
                    <li key={category}>
                      <a
                        href="product.html"
                        className="block px-4 py-2 text-gray-800"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Language, Currency, Ship to */}
          <div className="flex space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-800">
                <i className="fas fa-globe"></i>
                <span>{language}</span>
              </button>
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-800">
                <span className="text-xl">{currency.symbol}</span>
                <span>{currency.code}</span>
              </button>
            </div>

            {/* Ship to Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-800">
                <img src={shipTo.flag} alt="Flag" className="w-5 h-5" />
                <span>{shipTo.country}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar end */}
    </>
  );
};
export default Header;
