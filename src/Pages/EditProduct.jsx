import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [fetchedData, setFetchedData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    discountPrice: "",
    productImage: "",
    availability: "available",
    size: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://flag-b5wv.onrender.com/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setFormData({
          name: data.data.name,
          category: data.data.category,
          description: data.data.description,
          price: data.data.price,
          discountPrice: data.data.discountPrice || "",
          productImage: data.data.productImage || "",
          availability: data.data.availability,
        });
      } catch (error) {
        console.error("Error fetching product:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://flag-b5wv.onrender.com/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      alert("Product updated successfully!");
      navigate("/shop"); // Redirect back to the products list
    } catch (error) {
      console.error("Error updating product:", error.message);
      alert("Error updating product. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="form-header">
          <h6>Manage Your Website</h6>
          <h4>Edit Product</h4>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
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
            />
          </div>
          <div className="form-group"> {/* Added new size field */}
            <label>Size</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              placeholder="Enter product size (e.g., S, M, L)"
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="productImage"
              value={formData.productImage}
              onChange={handleInputChange}
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
            Update Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditProduct;
