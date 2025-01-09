import React from 'react';

const Footer = () => {
  return (
    <>
      <NewsletterSection />
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <BrandSection />
            <LinksSection />
            <GetAppSection />
          </div>
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
        <p className="mt-2 text-gray-600">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <form className="mt-6 flex justify-center">
        {/* px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 */}
          <input 
            type="email" 
            placeholder="Email" 
            className="px-4 py-2 border rounded-l-md outline-none"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const BrandSection = () => {
  return (
    <div className="col-span-1 text-center lg:text-left">
      <img src="/images/logo.jpg" alt="Brand Logo" className="h-12 mx-auto lg:mx-0" />
      <h2 className="text-lg font-bold text-gray-800 mt-4">Brand</h2>
      <p className="text-sm text-gray-600 mt-2">
        Best information about the company goes here but now lorem ipsum is
      </p>
      <div className="flex justify-center lg:justify-start mt-4 space-x-3">
        {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map((social) => (
          <a key={social} href="#" className="text-gray-500 hover:text-gray-800">
            <i className={`fab fa-${social}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

const LinksSection = () => {
  const sections = [
    {
      title: 'About',
      links: ['About Us', 'Find Store', 'Categories', 'Blogs']
    },
    {
      title: 'Partnership',
      links: ['About Us', 'Find Store', 'Categories', 'Blogs']
    },
    {
      title: 'Information',
      links: ['Help Center', 'Money Refund', 'Shipping', 'Contact Us']
    },
    {
      title: 'For Users',
      links: ['Login', 'Register', 'Settings', 'My Orders']
    }
  ];

  return (
    <div className="col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-md font-semibold text-gray-800">{section.title}</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const GetAppSection = () => {
  return (
    <div className="col-span-1 text-center lg:text-left">
      <h3 className="text-md font-semibold text-gray-800">Get App</h3>
      <div className="mt-4">
        <a href="#">
          <img src="/images/app-store.png" alt="App Store" className="h-10 mx-auto lg:mx-0 mb-2" />
        </a>
        <a href="#">
          <img src="/images/google-play.jpg" alt="Google Play" className="h-10 mx-auto lg:mx-0" />
        </a>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="mt-8 flex justify-between items-center text-gray-500 text-sm">
      <p>&copy; 2023 Ecommerce.</p>
      <div className="flex items-center space-x-2">
        <img src="/images/united-states.jpg" alt="Flag" className="h-4 w-6 object-cover" />
        <a href="#" className="text-gray-500 hover:underline">English</a>
      </div>
    </div>
  );
};

export default Footer;