import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

// Provider نامگذاری شده مطابق استفاده در main.jsx
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  /*
    cartItems structure:
    [
      { id, title, price, image, category, ... , count }
    ]
  */

  // افزودن محصول (دریافت کل آبجکت محصول)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, count: i.count + 1 } : i
        );
      } else {
        // اطمینان از وجود فیلد image, title, price
        const normalized = {
          id: product.id,
          title: product.title ?? product.name ?? "No title",
          price: Number(product.price) ?? 0,
          image: product.image ?? product.images ?? "",
          category: product.category ?? "Uncategorized",
          // هر فیلد دیگری که لازم باشه
          count: 1,
        };
        return [...prev, normalized];
      }
    });
  };

  // کاهش تعداد یا حذف کامل وقتی count به صفر میرسه
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (!existing) return prev;

      if (existing.count <= 1) {
        // حذف کامل
        return prev.filter((i) => i.id !== productId);
      } else {
        // کاهش تعداد
        return prev.map((i) =>
          i.id === productId ? { ...i, count: i.count - 1 } : i
        );
      }
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
