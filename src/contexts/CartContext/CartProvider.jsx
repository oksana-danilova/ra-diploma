import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from './CartContext';

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        let savedCart = [];

        try {
            savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
            console.error("Error parsing cart:", error);
            savedCart = [];
        }

        return savedCart;
    });

    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    function getProductIndex(id, size) {
        const index = cart.findIndex(product =>
            product.id === id &&
            product.size === size
        );
        return index;
    }

    function handleProductAdd(newProduct) {
        const { id, size } = newProduct;
        const index = getProductIndex(id, size);

        if (index !== -1) {
            const newCount = cart[index].count + newProduct.count;
            const updatedCart = [...cart];
            updatedCart[index].count = Math.min(newCount, 10);
            setCart(updatedCart);
        } else {
            setCart([...cart, newProduct]);
        }
    }

    function handleProductDelete(index) {
        const updatedCart = [
            ...cart.slice(0, index),
            ...cart.slice(index + 1),
        ];
        setCart(updatedCart);
    }

    function handleCartClear() {
        setCart([]);
    }

    const value = {
        cart,
        handleProductAdd,
        handleProductDelete,
        handleCartClear,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};