import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import React, { useState } from "react";
import "@/app/globals.css";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const validateForm = () => {
    const errors: {
      usernameError: string;
      emailError: string;
      passwordError: string;
      confirmPasswordError: string;
    } = {
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  
    if (formData.username.length > 14) {
      errors.usernameError = "Username must be less than 14 characters.";
    }
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.emailError = "Invalid or duplicate email.";
    }
    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        formData.password
      )
    ) {
      errors.passwordError =
        "Password must include letters, numbers, and special characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPasswordError = "Passwords do not match.";
    }
  
    setErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
    }
  };

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Create Account
        </h2>
        <form id="signupForm" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.usernameError && (
              <p className="text-red-500 text-sm">{errors.usernameError}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.emailError && (
              <p className="text-red-500 text-sm">{errors.emailError}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.passwordError && (
              <p className="text-red-500 text-sm">{errors.passwordError}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.confirmPasswordError && (
              <p className="text-red-500 text-sm">
                {errors.confirmPasswordError}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Role</label>
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignupForm;
