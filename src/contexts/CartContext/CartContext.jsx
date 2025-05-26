import { createContext, useContext } from 'react';

export const CartContext = createContext({
    cart: [],
    handleProductAdd: () => {},
    handleProductDelete: () => {},
    handleCartClear: () => {},
});

export function useCart() {
    return useContext(CartContext);
}