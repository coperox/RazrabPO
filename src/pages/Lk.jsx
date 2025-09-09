import { useCart } from '../contexts/CartContext';
import '../styles/components/cart.css';
import '../styles/pages/Lk.css';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <div className="cart-item-controls">
          <button 
            onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
            aria-label="Уменьшить количество"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>
        <div className="cart-item-price">{item.price} × {item.quantity}</div>
        <div className="cart-item-total">
          {calculateTotal(item.price, item.quantity)}
        </div>
        <button 
          className="remove-btn"
          onClick={() => onRemove(item.productId)}
          aria-label="Удалить товар"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

function calculateTotal(price, quantity) {
  const priceNumber = parseInt(price.replace(/\s+/g, '').replace('₽', ''));
  return (priceNumber * quantity).toLocaleString('ru-RU') + ' ₽';
}

export default function CartPage() {
  const { cartItems, isLoading, updateQuantity, removeFromCart, clearCart } = useCart();

  if (isLoading) {
    return (
      <div className="cart-loading">
        <div>Загрузка корзины...</div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <p>Перейдите в каталог товаров, чтобы добавить товары в корзину</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              Итого: {calculateCartTotal(cartItems)}
            </div>
            
            <div className="cart-actions">
              <button 
                className="clear-btn"
                onClick={clearCart}
                aria-label="Очистить корзину"
              >
                Очистить корзину
              </button>
              <button 
                className="checkout-btn"
                onClick={() => alert('да всё круто да')}
                aria-label="Оформить заказ"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function calculateCartTotal(items) {
  const total = items.reduce((sum, item) => {
    const priceNumber = parseInt(item.price.replace(/\s+/g, '').replace('₽', ''));
    return sum + (priceNumber * item.quantity);
  }, 0);
  
  return total.toLocaleString('ru-RU') + ' ₽';
}