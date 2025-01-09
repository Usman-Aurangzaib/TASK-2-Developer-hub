import React from "react";
import "@/app/globals.css";
import Cart from "@/components/Cart/page"; // Import the Cart component
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const CartPage: React.FC = () => {
  return (
    <div>
    <Header/>
      <Cart /> {/* Rendering the Cart component */}
      <Footer/>
    </div>
  );
};

export default CartPage;
