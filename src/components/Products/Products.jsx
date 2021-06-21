import React, { useContext } from 'react';
import Product from '../Product';
import AutoCompleteInput from '../AutoCompleteInput';
import AppContext from '../../lib/context/AppContext';
import './Products.css';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <AutoCompleteInput />
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;