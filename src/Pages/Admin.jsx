import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "electronics",
    description: "",
    price: "",
    discountPrice: "",
    imageURL: "",
    availability: "available",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("authToken"); // Get auth token if needed
    const payload = {
      productImage: formData.imageURL, // Image URL
      name: formData.name,
      price: parseFloat(formData.price),
      discountPrice: formData.discountPrice
        ? parseFloat(formData.discountPrice)
        : null, // Parse discount price if provided
      description: formData.description,
      availability: formData.availability,
      category: formData.category,
    };

    try {
      const response = await fetch("https://flag-b5wv.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined, // Include token if required
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to add product. Please check the input.");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Product added successfully!");

      // Reset the form
      setFormData({
        name: "",
        category: "electronics",
        description: "",
        price: "",
        discountPrice: "",
        imageURL: "",
        availability: "available",
      });
    } catch (err) {
      console.error("Error:", err.message);
      alert(err.message);
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
