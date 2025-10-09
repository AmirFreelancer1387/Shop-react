import { useState } from "react"

export const useCart = () => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemId) => {
        if (!cartItems.find((item) => item.id === itemId)) {
            setCartItems([...cartItems, { id: itemId, count: 1 }]);
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === itemId
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        }

        console.log(cartItems);
    };

    const removeFromCart = (itemId) => {
        setCartItems(
            cartItems.map((i) => {
                if (i.id === itemId) {
                    return {
                        ...i,
                        count: i.count > 0 ? i.count - 1 : 0
                    };
                } else {
                    return i;
                }
            })
        );
    };

    return {cartItems,addToCart,removeFromCart}
}