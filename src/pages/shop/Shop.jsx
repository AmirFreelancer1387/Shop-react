import React from "react";
import Product from "./Product";
import { PRODUCT } from "../../data/Products";
import Footer from "../../components/Footer";
import CartSlider from "../../components/PtoductsSlider";
import Slider from '../../components/Slider'

const Shop = () => {
  return (
    <div className="row">
      <Slider/>
      <CartSlider/>
      <h2 className="text-center fw-bold">More Products</h2>
      {PRODUCT[0].products.map((productData) => (
        <Product key={productData.id} data={productData} />
      ))}
      <hr className="w-75 my-3 mx-auto" />
      <Footer />
    </div>
  );
};

export default Shop;
