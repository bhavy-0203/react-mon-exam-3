import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      image: imageUrl
    };

    setProducts([...products, newProduct]);

    console.log(newProduct,products);

    setProductName('');
    setProductPrice('');
    setImageUrl('');
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Product Price:
            <input
              type="number"
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    
      <h2>Product List</h2>
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                />
              )}
            </div>
          ))
        ) : (
          <p>No products added yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;

