import React, { useContext } from 'react';

import Product from '../Product';
import AutoCompleteInput from '../AutoCompleteInput';
import AppContext from '../../lib/context/AppContext';
import './Products.css';


const Products = () => {
  const { state, addToCart, } = useContext(AppContext);
  const { products } = state; // TODO: Etapa 1: Filter products by input
// const {pok, setPok} = useState({key: ''})
  const handleAddToCart = product => () => {
    addToCart(product)
  }

  /* Acceder al state del Input:
  const handleChange = ({ target: { name, value } }) => {
    setForm((lastForm: any) => ({
      ...lastForm,
      [name]: value
    }));
  };
  */
 /* Filtrar elementos, forma 1
 {
    products.filter(product => (
      <Product key={product.id} product={products} handleAddToCart={handleAddToCart} />
    ))
  } */
  /*
  recorrer la lista de objetos pokemon, e ir preguntando, si la letra/letras ingresadas estan dentro de ese objeto, e ir agregandolos a una lista aux, la cual se mostrará.
  */
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
