import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Button } from "react-bootstrap";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <div className="row my-2">
        {cartItems.length === 0 && <p className="text-center text-muted">Your cart is empty 🛒</p>}

        {cartItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm border-0">
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
                  <Button variant="outline-danger" onClick={() => removeFromCart(product.id)}>
                    <RemoveShoppingCartIcon />
                  </Button>

                  <span className="fw-bold">{product.count}</span>

                  <Button variant="outline-success" onClick={() => addToCart(product)}>
                    <AddShoppingCartIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="total-price bg-dark p-4 sticky-bottom w-75 rounded-4 my-1 mx-auto">
          <h4 className="d-inline text-light">Total Price : {totalPrice.toLocaleString()} $</h4>
          <button className="btn btn-primary float-end mb-4 w-25">Buy</button>
        </div>
      )}
    </>
  );
};

export default Cart;
