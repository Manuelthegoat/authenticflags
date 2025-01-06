import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    discountPrice: "",
    imageURL: "",
    availability: "available",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      navigate("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  if (!isAuthorized) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");
    try {
      const response = await fetch("https://flag-b5wv.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add product.");
      }

      alert("Product added successfully!");
      navigate("/admin-products");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="form-header">
          <h6>Manage Your Website</h6>
          <h4>Add New Item</h4>
          <button
            className="view-products-button"
            onClick={() => navigate("/admin-products")}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            View All Products
          </button>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Enter category"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the product"
              required
            />
          </div>
          <div className="form-group">
            <label>Price (₦)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              required
            />
          </div>
          <div className="form-group">
            <label>Discount Price (₦)</label>
            <input
              type="number"
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleInputChange}
              placeholder="Enter discount price (optional)"
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="form-group">
            <label>Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
