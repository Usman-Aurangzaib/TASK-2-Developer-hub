import { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { useRouter } from "next/router";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  category: string;
};

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const productsPerPage = 9;

  // Fetch products from the products.json file
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  // Update product grid based on filters
  useEffect(() => {
    updateProductGrid();
  }, [products, currentPage]);

  // Function to update product grid
  const updateProductGrid = () => {
    const categoryFilters = Array.from(
      document.querySelectorAll(".filter-checkbox:checked")
    ).map((input) => (input as HTMLInputElement).value);

    const ratingFilter = (
      document.querySelector('input[name="rating"]:checked') as HTMLInputElement
    )?.value;

    const priceFilter = (
      document.getElementById("priceRange") as HTMLInputElement
    )?.value;

    const searchQuery =
      (
        document.getElementById("desktopSearch") as HTMLInputElement
      )?.value.toLowerCase() ||
      (
        document.getElementById("mobileSearch") as HTMLInputElement
      )?.value.toLowerCase();

    const filteredProducts = products.filter((product: Product) => {
      const matchCategory =
        categoryFilters.includes("all") ||
        categoryFilters.includes(product.category);
      const matchPrice = product.price <= parseFloat(priceFilter); // Make sure priceFilter is parsed correctly
      const matchRating =
        !ratingFilter || product.rating >= parseInt(ratingFilter);
      const matchSearch = product.name.toLowerCase().includes(searchQuery);

      return matchCategory && matchPrice && matchRating && matchSearch;
    });

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    setFilteredProducts(productsToDisplay);
  };

  // Handle pagination click
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const viewDetails = (productId: number) => {
    router.push(`/${productId}`);
  };

  const addToCart = (productId: number) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loginUsers") || "[]")?.[0];
  
    if (!loggedInUser) {
      alert("Please login first to add items to your cart!");
      window.location.href = "./login"; // Redirect to login page
      return;
    }
  
    const product = products.find((p) => p.id === productId);
  
    if (!product) return;
  
    let cart: (Product & { quantity: number })[] = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex === -1) {
      // If the product isn't in the cart, add it with quantity 1
      cart.push({ ...product, quantity: 1 });
    } else {
      // If it's already in the cart, increase the quantity
      cart[existingProductIndex].quantity += 1;
    }
  
    // Save the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  };
  
  return (
    <section>
      <div
        id="productGrid"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredProducts.map((product) => (
          <div
            className={`${styles.productCard} p-4 bg-white`}
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.productCardImg}
            />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
            <p className="text-yellow-500">{"★".repeat(product.rating)}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => viewDetails(product.id)}
            >
              View Details
            </button>

            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded add-to-cart-btn"
              data-id={product.id}
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div id="pagination" className="mt-4 flex space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 border rounded"
          >
            Prev
          </button>
        )}
        <button
          onClick={() => handlePageChange(1)}
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          1
        </button>
        {products.length > productsPerPage && (
          <button
            onClick={() => handlePageChange(2)}
            className={`px-4 py-2 border rounded ${
              currentPage === 2 ? "bg-blue-500 text-white" : ""
            }`}
          >
            2
          </button>
        )}
        {currentPage < Math.ceil(products.length / productsPerPage) && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 border rounded"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

const viewDetails = (productId: number) => {
  const product = JSON.parse(localStorage.getItem("products") || "[]").find(
    (product: Product) => product.id === productId
  );
  if (product) {
    localStorage.setItem("productDetails", JSON.stringify(product));
    window.location.href = "product-details.html";
  }
};

export default ProductList;
