import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Card, Button, Row, Col } from 'antd';
import AppLayout from '@/components/Layout';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string; // Base64 encoded image
}

const IndexPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
      if (category) {
        setFilteredProducts(response.data.filter((product: Product) => product.category === category));
      } else {
        setFilteredProducts(response.data);
      }
    });
  }, [category]);

  const handleSelect = (id: number) => {
    router.push({
      pathname: '/payment',
      query: { productId: id },
    });
  };

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <AppLayout>
      <Row gutter={[16, 16]}>
        {filteredProducts.map(product => (
          <Col span={8} key={product.id}>
            <Card
              title={
                <span
                  style={{
                    color: hoveredCard === product.id ? '#3D2C1B' : '#3D2C1B',
                    fontFamily: 'Kanit',
                  }}
                >
                  {product.name}
                </span>
              }
              bordered={true}
              style={{
                borderRadius: '20px',
                textAlign: 'center',
                backgroundColor: hoveredCard === product.id ? '#D1AB85' : '#F0F0F0',
                boxShadow: hoveredCard === product.id ? '0px 4px 15px rgba(0, 0, 0, 0.2)' : '0px 0px 10px rgba(0, 0, 0, 0.15)',
                transform: hoveredCard === product.id ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'all 0.5s ease',
                color: '#3D2C1B',
                fontFamily: 'Kanit',
              }}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
              cover={
                <img
                  alt={product.name}
                  src={`data:image/png;base64,${product.image}`}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              }
            >
              <p>Price: {product.price} THB</p>
              <Button
                type="primary"
                className='button-brown'
                onClick={() => handleSelect(product.id)}
                disabled={product.stock <= 0}
              >
                Select
              </Button>
              {product.stock <= 0 && (
                <div className="out-of-stock">Out of Stock</div>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </AppLayout>
  );
};

export default IndexPage;
