import React, { useEffect, useState } from "react";
import Shop from "../Components/Shop";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://flag-b5wv.onrender.com/api/products"
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        // Extract unique categories from the products
        const uniqueCategories = [
          ...new Set(data.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div role="main" className="main shop pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <aside className="sidebar">
                <h5 className="font-weight-semi-bold pt-3">Categories</h5>
                <ul className="nav nav-list flex-column">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <li className="nav-item" key={category}>
                        <a
                          className="nav-link"
                          href={`#${category}`}
                          onClick={() => handleCategoryClick(category)}
                        >
                          {category}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="nav-item">
                      <p>No categories available</p>
                    </li>
                  )}
                </ul>
              </aside>
            </div>
            <div className="col-lg-9">
              <Shop selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
