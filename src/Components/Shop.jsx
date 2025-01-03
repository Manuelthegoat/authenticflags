import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://flag-b5wv.onrender.com/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
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
    <>
     <div role="main" class="main shop pt-4">
      <div className="container">
        <div className="row">
          <div
            class="row products product-thumb-info-list"
            data-plugin-masonry
            data-plugin-options="{'layoutMode': 'fitRows'}"
          >
              {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="product mb-0" key={product.id}>
                  <div className="product-thumb-info border-0 mb-3">
                    <div className="addtocart-btn-wrapper">
                      <a
                        href="/"
                        className="text-decoration-none addtocart-btn"
                        title="Add to Cart"
                      >
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>
                    <a
                      href="/"
                      className="quick-view text-uppercase font-weight-semibold text-2"
                    >
                      QUICK VIEW
                    </a>
                    <a href="/">
                      <div className="product-thumb-info-image">
                        <img
                          alt={product.productImage}
                          className="img-fluid"
                          src={product.productImage}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a
                        href="/"
                        className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                      >
                        {product.category}
                      </a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a
                          href="shop-product-sidebar-right.html"
                          className="text-color-dark text-color-hover-primary"
                        >
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <a
                      href="/"
                      className="text-decoration-none text-color-default text-color-hover-dark text-4"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                  <div title={`Rated ${product.rating} out of 5`}>
                    <input
                      type="text"
                      className="d-none"
                      value={product.rating}
                      title=""
                      data-plugin-star-rating
                      data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                    />
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">
                      ₦{product.salePrice}
                    </span>
                    <span className="amount">₦{product.price}</span>
                  </p>
                </div>
            </div>
              ))}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ul className="pagination float-end">
              <li className="page-item">
                <a className="page-link" href="/">
                  <i className="fas fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Shop;
