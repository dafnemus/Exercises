import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import Product from '../Product';
import AutoCompleteInput from '../AutoCompleteInput';
import AppContext from '../../lib/context/AppContext';
import './Products.css';


const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state; // TODO: Etapa 1: Filter products by input

  // const pokemons = useSelector(); // TODO: Etapa 2: Could use this
  
  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
       <AutoCompleteInput /> {/* TODO: Etapa 1: Must create an onSelectItem method */}
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;