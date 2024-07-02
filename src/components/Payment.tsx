import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Row } from 'antd';
import AppLayout from '@/components/Layout';
import Swal from 'sweetalert2';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PaymentPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [insertedMoney, setInsertedMoney] = useState<number>(0);
  const [change, setChange] = useState<number | null>(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      axios.get(`/api/products/${productId}`).then(response => {
        setProduct(response.data);
      });
    }
  }, [productId]);

  const handleInsertMoney = (amount: number) => {
    setInsertedMoney(prev => prev + amount);
  };

  const handlePayment = () => {
    if (product && insertedMoney >= product.price) {
      axios.post('/api/transactions', {
        productId: product.id,
        amount: insertedMoney
      }).then(response => {
        setChange(response.data.change);
        Swal.fire({
          title: 'Payment successful!',
          text: `Dispensing product...\nAnd change is ${response.data.change} THB`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/');
        });
      }).catch(error => {
        Swal.fire({
          title: 'Payment failed',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    } else {
      Swal.fire({
        title: 'Not enough money inserted',
        text: 'Please insert more money to complete the payment.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <AppLayout showMenu={false}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        height:'300px'
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: '#3D2C1B', 
          padding: '60px',
          backgroundColor: '#D1AB85',
          width: '600px',
          borderRadius: '20px',
        }}>
          {product && (
            <>
              <h2>Payment for: {product.name}</h2>
              <p>Price: {product.price} THB</p>
              <p>Inserted Money: {insertedMoney} THB</p>
              <Button onClick={() => handleInsertMoney(1)} className='button-brown'>Insert 1 THB</Button>
              <Button onClick={() => handleInsertMoney(5)} className='button-brown'>Insert 5 THB</Button>
              <Button onClick={() => handleInsertMoney(10)} className='button-brown'>Insert 10 THB</Button>
              <Button onClick={() => handleInsertMoney(20)} className='button-brown'>Insert 20 THB</Button>
              <Button onClick={handlePayment} className='button-red'>Pay</Button>
              {change !== null && <p>Change: {change} THB</p>}
            </>
          )}
        </div>
      </div>
      <Row style={{ marginTop: '20px', justifyContent: 'center' }}>
        <Button
          onClick={() => router.back()}
          className='button-darkbrown'
        >
          Back
        </Button>
      </Row>
    </AppLayout>
  );
};

export default PaymentPage;
