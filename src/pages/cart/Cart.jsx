import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Button } from "react-bootstrap";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

// 🔹 اضافه کردن Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // ✅ تابع مخصوص برای افزودن همراه با Toast
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} Added to cart🛒`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="row my-4 mx-auto">
        {cartItems.length === 0 && (
          <p className="text-center text-muted">Your cart is empty 🛒</p>
        )}

        {cartItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-3 container">
            <div className="card h-100 shadow-lg border-0">
              <img
                src={product.image ?? product.images ?? ""}
                alt={product.title}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-muted small">{product.category}</p>
                <p className="fw-bold mb-2">${product.price}</p>

                <div className="mt-auto d-flex align-items-center justify-content-between">
                  <Button
                    variant="outline-danger"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <RemoveShoppingCartIcon />
                  </Button>

                  <span className="fw-bold">{product.count}</span>

                  <Button
                    variant="outline-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="d-flex justify-content-around total-price bg-dark w-100 rounded-top-3 mx-auto fixed-bottom">
          <h4 className="text-light mt-4">
            Total Price : {totalPrice.toLocaleString()} $
          </h4>
          <button className="btn btn-primary float-end mb-4 btn-sm mt-4 d-block d-sm-none">Buy</button>
          <button className="btn btn-primary float-end mb-4 w-25 mt-4 d-none d-sm-block">Buy</button>
        </div>
      )}
    </>
  );
};

export default Cart;
