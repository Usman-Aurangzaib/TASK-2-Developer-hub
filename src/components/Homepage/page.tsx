import React from 'react'

function page() {
  return (
    <div>
    {/* Main Content */}
< main className="container mx-auto px-4 py-8">
  {/* Hero Section */}
  <div className="flex flex-wrap bg-white p-4 space-y-4 lg:space-y-0 lg:space-x-4 rounded-lg shadow-md">
    {/* Categories Sidebar */}
    <div className="hidden md:block w-full lg:w-1/4 bg-gray-100 rounded-lg p-4">
      <ul className="space-y-4">
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Automobiles</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Clothes and wear</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Home interiors</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Computer and tech</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Tools, equipment</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Sports and outdoor</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Animal and pets</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">Machinery tools</li>
        <li className="text-black-600 no-underline hover:text-blue-800 transition-colors duration-300">More category</li>
      </ul>
    </div>

    {/* Hero Banner */}
    <div className="flex-1 w-full lg:w-1/2 relative h-56 sm:h-72 lg:h-96 rounded-lg overflow-hidden">
      <img
        src="https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Sidebar */}
    <div className="hidden lg:flex flex-col w-1/4 space-y-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <p className="text-gray-700 font-semibold">Hi, user</p>
        <p className="text-sm text-gray-500">Let's get started</p>
        <div className="flex gap-2 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">
            Join now
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded shadow">
            Log in
          </button>
        </div>
      </div>
      <div className="bg-orange-100 p-4 rounded-lg shadow">
        <p className="text-gray-700">
          Get US $10 off with a new supplier
        </p>
      </div>
      <div className="bg-teal-100 p-4 rounded-lg shadow">
        <p className="text-gray-700">
          Send quotes with supplier preferences
        </p>
      </div>
    </div>
  </div>

  {/* Deals and Offers Section */}
  <div className="bg-white p-6 mt-8 rounded-lg shadow-md max-w-7xl mx-auto">
    {/* Header and Timer */}
    <div className="flex flex-wrap gap-4">
      {/* Timer Section */}
      <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-100 p-4 rounded-lg text-center">
        <p className="text-lg font-bold text-gray-800">Deals and offers</p>
        <p className="text-sm text-gray-500">Hygiene equipments</p>
        <div className="flex justify-center space-x-2 mt-4">
          {/* Timer Elements */}
          <div className="text-center">
            <p className="text-xl font-bold bg-gray-200 rounded p-2">
              04
            </p>
            <p className="text-sm text-gray-500 mt-1">Days</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold bg-gray-200 rounded p-2">
              13
            </p>
            <p className="text-sm text-gray-500 mt-1">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold bg-gray-200 rounded p-2">
              34
            </p>
            <p className="text-sm text-gray-500 mt-1">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold bg-gray-200 rounded p-2">
              56
            </p>
            <p className="text-sm text-gray-500 mt-1">Seconds</p>
          </div>
        </div>
      </div>


            {/* Product Section */}
            <div className="flex flex-wrap w-full lg:w-2/3 gap-4">
              {/* Product 1 */}
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                <img
                  src="https://i.pinimg.com/736x/83/d3/19/83d319d0737e6c91e40d49d6b3fec5c2.jpg"
                  alt="Smart Watch"
                  className="w-full h-auto object-contain rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-center mb-2">Smart watches</p>
                <p className="text-center text-red-600 font-bold text-xs bg-red-100 rounded-full px-2 py-1">-25%</p>
              </div>
              {/* Product 2 */}
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                <img
                  src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
                  alt="Laptops"
                  className="w-full h-auto object-contain rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-center mb-2">Laptops</p>
                <p className="text-center text-red-600 font-bold text-xs bg-red-100 rounded-full px-2 py-1">-15%</p>
              </div>
              {/* Product 3 */}
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                <img
                  src="https://i.pinimg.com/736x/0a/95/73/0a957350d8ba1c3e0fb805d610269154.jpg"
                  alt="GoPro Cameras"
                  className="w-full h-auto object-contain rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-center mb-2">GoPro cameras</p>
                <p className="text-center text-red-600 font-bold text-xs bg-red-100 rounded-full px-2 py-1">-40%</p>
              </div>
              {/* Product 4 */}
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                <img
                  src="https://i.pinimg.com/736x/be/bc/a6/bebca61f1c24f85badffd9b5a01bc489.jpg"
                  alt="Headphones"
                  className="w-full h-auto object-contain rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-center mb-2">Headphones</p>
                <p className="text-center text-red-600 font-bold text-xs bg-red-100 rounded-full px-2 py-1">-25%</p>
              </div>
              {/* Product 5 */}
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                <img
                  src="https://m.media-amazon.com/images/I/71Is-Zv6A0L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                  alt="Canon Cameras"
                  className="w-full h-auto object-contain rounded-md mb-2"
                />
                <p className="text-sm font-semibold text-center mb-2">Canon cameras</p>
                <p className="text-center text-red-600 font-bold text-xs bg-red-100 rounded-full px-2 py-1">-25%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Home and Outdoor Section */}
        <div className="container mx-auto p-4 flex flex-wrap lg:flex-nowrap">
      {/* Right Side Banner with Text and Button */}
      <div className="w-full lg:w-1/3 p-4 relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/65/87/75/1000_F_565877504_75QhFpHtgkGhqPZqSdPtXwpbwbkgnhtU.jpg"
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h2 className="text-black-800 text-4xl font-semibold mb-2">
            Home and Outdoors
          </h2>
          <p className="text-black-800 text-lg mb-4 text-center">
            Get the best deals on our products today.
          </p>
          <button className="bg-white text-black-800 py-1 px-4 rounded-full hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* 8 Cards in Grid Layout */}
      <div className="w-full lg:w-2/3 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 lg:mt-0">
        {[
          {
            title: "Soft chairs",
            price: "From USD 60",
            imgSrc: "https://i.pinimg.com/736x/85/2f/83/852f83d8c961edc2b45bd86a0c20d343.jpg",
          },
          {
            title: "Sofas and Chairs",
            price: "From USD 80",
            imgSrc: "https://i.pinimg.com/736x/ee/1a/f5/ee1af57130edd2b82e59f2e1705cc3d5.jpg",
          },
          {
            title: "Kitchen dishes",
            price: "From USD 40",
            imgSrc: "https://i.pinimg.com/736x/e7/ff/46/e7ff4636fa6799110106d52c3ef46123.jpg",
          },
          {
            title: "Smart Watches",
            price: "From USD 25",
            imgSrc: "https://i.pinimg.com/736x/14/8d/0b/148d0b4c744748b19721885fd7e4e2f1.jpg",
          },
          {
            title: "Kitchen mixer",
            price: "From USD 60",
            imgSrc: "https://i.pinimg.com/736x/aa/cb/d6/aacbd6e169a574a1c0478337bb93af63.jpg",
          },
          {
            title: "Blenders",
            price: "From USD 40",
            imgSrc: "https://i.pinimg.com/736x/62/ee/a2/62eea26fa69fdeb8225ad5a130ce29ac.jpg",
          },
          {
            title: "Home Appliances",
            price: "From USD 100",
            imgSrc: "https://i.pinimg.com/736x/00/9a/69/009a697161aa20ab3d2a88a19fe5eb6a.jpg",
          },
          {
            title: "Coffee Maker",
            price: "From USD 10",
            imgSrc: "https://i.pinimg.com/736x/ae/62/34/ae623440e379c39b5f870805f2fdb63a.jpg",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full h-50 object-cover rounded-md mb-2"
            />
            <h3 className="text-center text-lg font-semibold">{card.title}</h3>
            <h4 className="text-center text-sm font-light">{card.price}</h4>
          </div>
        ))}
      </div>
    </div>

        {/* Consumer Electronics Section */}
        <div className="container mx-auto p-4 flex flex-wrap lg:flex-nowrap">
      {/* Right Side Banner with Text and Button */}
      <div className="w-full lg:w-1/3 p-4 relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/d9/17/c5/d917c5981efc8f2542ef16dcff58c6a2.jpg"
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h2 className="text-black-800 text-4xl font-semibold mb-2 text-center">
            Consumer Electronics And Gadgets
          </h2>
          <p className="text-black-800 text-lg mb-4 text-center">
            Get the best deals on our products today.
          </p>
          <button className="bg-white text-black-800 py-1 px-4 rounded-full hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* 8 Cards in Grid Layout */}
      <div className="w-full lg:w-2/3 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 lg:mt-0">
        {/* Card Items */}
        {[
          {
            img: "https://i.pinimg.com/736x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg",
            title: "Smart Watches",
            price: "From USD 25",
          },
          {
            img: "https://i.pinimg.com/736x/64/b7/6c/64b76cdc1f6946cfc1116f8a91dcee0c.jpg",
            title: "Cameras",
            price: "From USD 50",
          },
          {
            img: "https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
            title: "Headphones",
            price: "From USD 35",
          },
          {
            img: "https://i.pinimg.com/736x/52/9d/ec/529dec5b45c59990c8548df1d631389a.jpg",
            title: "Tablets",
            price: "From USD 80",
          },
          {
            img: "https://i.pinimg.com/736x/6b/fe/e3/6bfee329c8abc1f77a1cac829465a22c.jpg",
            title: "Gaming Setup",
            price: "From USD 150",
          },
          {
            img: "https://i.pinimg.com/736x/6a/0d/fd/6a0dfd05ba9bcf6dca127d9eecdcb312.jpg",
            title: "Laptops & Pcs",
            price: "From USD 100",
          },
          {
            img: "https://i.pinimg.com/736x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg",
            title: "Smartphones",
            price: "From USD 90",
          },
          {
            img: "https://i.pinimg.com/736x/f1/39/9b/f1399b4acf66d85f9691d5661dd80f3d.jpg",
            title: "Electric Kettles",
            price: "From USD 45",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-50 object-cover rounded-md mb-2"
            />
            <h3 className="text-center text-lg font-semibold">{product.title}</h3>
            <h4 className="text-center text-sm font-light">{product.price}</h4>
          </div>
        ))}
      </div>
    </div>

        {/* Recommended Items Section */}
        <section className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recommended Items
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Card Example */}
            {[
              {
                img: "https://i.pinimg.com/736x/16/ac/be/16acbea58724adb45f41817f32a159ad.jpg",
                price: "$25.00",
                description: "T-Shirt with multiple colors, for men",
              },
              {
                img: "https://i.pinimg.com/736x/80/51/22/805122a69392ebd7d5b10d288d3ddf5c.jpg",
                price: "$19.80",
                description: "Jeans short for men blue color",
              },
              {
                img: "https://i.pinimg.com/736x/8f/f3/0d/8ff30d1c3a4f3268535475665a9545c7.jpg",
                price: "$25.70",
                description: "Brown winter coat medium size",
              },
              {
                img: "https://i.pinimg.com/736x/80/1d/e9/801de9af3f258ea206eb1a93a9acbdb0.jpg",
                price: "$25.70",
                description: "Leather Wallet",
              },
              {
                img: "https://i.pinimg.com/736x/0d/a8/c0/0da8c0410c6abf62af04c1f89306d3ea.jpg",
                price: "$25.70",
                description: "Jeans bag for travel for men",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={`Item ${idx + 1}`}
                  className="w-full h-50 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-semibold mb-1">{item.price}</p>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
