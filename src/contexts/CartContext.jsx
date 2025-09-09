import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    console.log('Загрузка из localStorage:', savedCart);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
        console.log('Корзина загружена:', parsedCart);
      } catch (error) {
        console.error('Ошибка парсинга корзины:', error);
        setCartItems([]);
      }
    }
    setIsLoading(false);
  }, []);

  // Сохранение в localStorage при изменении
  useEffect(() => {
    console.log('Сохранение корзины:', cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    console.log('Добавление в корзину:', item);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.productId === item.productId);
      
      if (existingItem) {
        const updated = prevItems.map(i =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
        console.log('Обновленная корзина (существующий товар):', updated);
        return updated;
      } else {
        const updated = [...prevItems, item];
        console.log('Обновленная корзина (новый товар):', updated);
        return updated;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const updated = prevItems.filter(item => item.productId !== productId);
      console.log('Удаление из корзины:', updated);
      return updated;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => {
      const updated = prevItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      );
      console.log('Изменение количества:', updated);
      return updated;
    });
  };

  const clearCart = () => {
    console.log('Очистка корзины');
    setCartItems([]);
  };

  const value = {
    cartItems,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};