import { createContext } from "react";
import { useCart } from "../hook/useCart";


export const ShopContext = createContext({
  cartItems: null,             // وضعیت اولیه آیتم‌های سبد خرید
  addToCart: () => {},         // تابع خالی برای اضافه کردن به سبد خرید
  removeFromCart: () => {},    // تابع خالی برای حذف از سبد خرید
});

export const ShopContextProvider = (props) => {
    return (
        <ShopContext.Provider value={useCart()}>
            {props.children}
        </ShopContext.Provider>
    )
}