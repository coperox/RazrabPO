import { useState } from 'react';

function CartForm({ product, onClose, onAddToCart }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Создаем объект товара для корзины с уникальным ID
      const cartItem = {
        id: Date.now(), // уникальный ID на основе времени
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
        addedAt: new Date().toISOString() // сохраняем дату добавления
      };
      
      // Вызываем колбэк для добавления в корзину
      onAddToCart(cartItem);
      onClose();
      alert('Товар добавлен в корзину!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось добавить товар в корзину');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="cart-form-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Добавить в корзину</h3>
        
        <div className="product-preview">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <h4>{product.title}</h4>
            <div className="product-price">{product.price}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Количество:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? 'Добавление...' : 'Добавить в корзину'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartForm;