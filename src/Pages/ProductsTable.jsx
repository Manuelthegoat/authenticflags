import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://flag-b5wv.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data || []); // Assuming the API returns { products: [...] }
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="products-table-container">
      <div className="header">
        <h2>Products List</h2>
        <button
          className="add-product-button"
          onClick={() => navigate("/admin")}
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </div>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className="products-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (₦)</th>
              <th>Discount Price (₦)</th>
              <th>Description</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id || index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={product.productImage}
                    alt={product.name}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price.toLocaleString()}</td>
                <td>
                  {product.discountPrice
                    ? product.discountPrice.toLocaleString()
                    : "N/A"}
                </td>
                <td>{product.description}</td>
                <td
                  style={{
                    color: product.availability === "available" ? "green" : "red",
                  }}
                >
                  {product.availability}
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                    style={{
                      padding: "5px 10px",
                      marginRight: "10px",
                      backgroundColor: "#ffc107",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsTable;
