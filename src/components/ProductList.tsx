import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Props {
  products: Product[];
  onSelect: (id: number) => void;
}

const ProductList: React.FC<Props> = ({ products, onSelect }) => (
  <div>
    {products.map(product => (
      <ProductItem key={product.id} product={product} onSelect={() => onSelect(product.id)} />
    ))}
  </div>
);

export default ProductList;
