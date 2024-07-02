import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
  onSelect: (id: number) => void;
}

const ProductItem: React.FC<Props> = ({ product, onSelect }) => (
  <div>
    <h3>{product.name}</h3>
    <p>Price: {product.price} THB</p>
    <button onClick={() => onSelect(product.id)}>Select</button>
  </div>
);

export default ProductItem;
