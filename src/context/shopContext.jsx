import React, { createContext, useState } from "react";
import { toast } from "react-toastify"; // 🔹 اضافه شد

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // افزودن محصول
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        toast.info(`${product.title} Added back to cart🛒`, {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
        return prev.map((i) =>
          i.id === product.id ? { ...i, count: i.count + 1 } : i
        );
      } else {
        const normalized = {
          id: product.id,
          title: product.title ?? product.name ?? "No title",
          price: Number(product.price) ?? 0,
          image: product.image ?? product.images ?? "",
          category: product.category ?? "Uncategorized",
          count: 1,
        };
        toast.success(`${normalized.title} Added to cart✅`, {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
        return [...prev, normalized];
      }
    });
  };

  // حذف محصول
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (!existing) return prev;

      if (existing.count <= 1) {
        toast.error(`${existing.title}Removed from cart🗑️`, {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
        return prev.filter((i) => i.id !== productId);
      } else {
        toast.warning(`تعداد ${existing.title} decreased➖`, {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
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
