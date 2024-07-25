import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice'; // Import the addItem action
import './ProductListingPage.css'; // Import the CSS file

const products = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 20,
    image: 'plant1.jpg',
    description: 'Aloe Vera is a succulent plant species of the genus Aloe.',
  },
  {
    id: 2,
    name: 'Ornate Orchids',
    price: 25,
    image: 'plant2.jpg',
    description: 'The flower of the orchid plant is colorful, fragrant and can vary in sizes from microscopic plants  to gigantic plants.',
  },
  {
    id: 3,
    name: 'Ambracadabra Rose Plant',
    price: 15,
    image: 'plant3.jpg',
    description: 'Abracadabra is a Floribunda garden rose and has to be the most unusual rose we have ever grown.',
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 30,
    image: 'plant4.jpg',
    description: 'Peace Lily is a popular indoor plant with beautiful white flowers.',
  },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={`../images/${product.image}`} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
