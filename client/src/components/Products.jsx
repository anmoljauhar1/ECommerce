// src/Pages/Products.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css'; // ← Add this line
import productImage from '../assets/images/products/nike.jpg'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-heading">All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {product.imageUrl && (
                <img
                  src={productImage}
                  alt={product.name}
                  className="product-image"
                />
              )}
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
