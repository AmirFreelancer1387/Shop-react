import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { PRODUCT } from '../../data/Products';
import Product from '../shop/Product';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const cartProducts = PRODUCT[0].products.filter(product =>
    cartItems.some(item => item.id === product.id && item.count > 0)
  );

  return (
    <>
    <div className="row">
      {cartProducts.map(product => (
        <Product key={product.id} data={product} />
      ))}
    </div>
    </>
  );
};

export default Cart;
