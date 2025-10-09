import React from 'react';
import Product from './Product';
import { PRODUCT } from '../../data/Products';
import Footer from '../../components/Footer';


const Shop = () => {
  return (
    <div className="row">
      {PRODUCT[0].products.map(productData => (
        <Product key={productData.id} data={productData} />
      ))}
      <hr className='w-75 my-3 mx-auto'/>
      <Footer/>
    </div>
  );
};

export default Shop;