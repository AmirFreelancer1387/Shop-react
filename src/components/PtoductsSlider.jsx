import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartSlider = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    chunkedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>

      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunkedProducts.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {group.map((product) => (
                  <div key={product.id} className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={product.image}
                        className="card-img-top p-3"
                        alt={product.title}
                        style={{
                          height: "220px",
                          objectFit: "contain",
                        }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-truncate">
                          {product.title}
                        </h5>
                        <p className="card-text text-muted small">
                          {product.category}
                        </p>
                        <div className="mt-auto">
                          <p className="fw-bold mb-2">${product.price}</p>
                          <button className="btn btn-primary w-100">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CartSlider;
