import { useState } from 'react';
import ServiceCard from '../components/ProductCard';
import CartForm from '../components/CartForm';
import { useCart } from '../contexts/CartContext'; // Новый импорт
import '../styles/pages/Product.css';

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart(); // Используем контекст

  const services = [
    {
      id: 1,
      title: 'Adobe Photoshop (подписка на 1 год)',
      description: 'все, что можно себе представить, вы можете создать в Photoshop...',
      image: '/images/photoshop.jpg',
      price: '31 990 ₽'
    },
    {
      id: 2,
      title: 'Microsoft 365 Профессионал плюс (на 1 год)',
      description: 'Microsoft 365 – это универсальное программное решение...',
      image: '/images/office.jpg',
      price: '1 790 ₽'
    },
    {
      id: 3,
      title: 'Microsoft Windows 10 Home',
      description: 'Microsoft Windows 10 Домашняя (Home) — это бессрочная операционная система...',
      image: '/images/win.jpg',
      price: '1 997 ₽'
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Выбран товар для добавления:', product);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleCartItemAdded = (newItem) => {
    console.log('Добавление через форму:', newItem);
    addToCart(newItem);
  };

  return (
    <div className="services-page">
      <section className="services-list">
        <div className="container">
          <div><img src="images/Product.jpg" alt="Продукты" /></div>
          <h2>Наши продукты</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <CartForm 
          product={selectedProduct} 
          onClose={handleCloseModal}
          onAddToCart={handleCartItemAdded}
        />
      )}
    </div>
  );
}

export default Product;