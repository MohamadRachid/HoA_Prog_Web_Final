import React, { useState } from 'react';
import { PRODUCTS } from '../products';
import { Product } from './Product';
import { FaSearch } from "react-icons/fa";
import './Card.css';

function Card() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>House of Athletes</h1>
      </div>
      <div className='searchBarContainer'>
      <h2 style={{ marginRight: '8px' }}><FaSearch /></h2>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='searchBarInput'
        />
      </div>
      <div className='products'>
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Card;
