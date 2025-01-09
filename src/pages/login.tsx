import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import "@/app/globals.css";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
    const [error, setError] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add form submission logic here
      setError(false);
    };
  
    return (
        <>
        <Header/>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">Login</h2>
          <form id="loginForm" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input id="loginEmail" type="email" placeholder="Enter email" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input id="loginPassword" type="password" placeholder="Enter password" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400" required />
            </div>
            {error && <p id="loginError" className="text-red-500 text-sm">Invalid email or password.</p>}
            <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90">
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <a href="/signup" className="text-teal-500 font-semibold">Signup</a>
          </p>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default LoginForm;