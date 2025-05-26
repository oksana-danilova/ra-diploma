import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from "./CartContext";

export function CartProvider(props) {

    const [cart, setCart] = useState(() => {
        let savedCart = [];

        try {
            savedCart = JSON.parse(localStorage.getItem('cart'));
        } catch (error) {
            console.log(error);
            savedCart = [];
        }

        return savedCart;
    });

    useEffect(() => {
        localStorage.setItem('cart', []);
    }, []);

    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    function getProductIndex(id, size) {
        const index = cart.findIndex((product) => {
            return product.id === id && product.size === size;
        });

        return index;
    }

    function handleProductAdd(newProduct) {
        const { id, size } = newProduct;
        const index = getProductIndex(id, size);

        if (index !== -1) {
            const newCount = cart[index].count + newProduct.count;

            const updatedCart = cart.slice();

            updatedCart[index].count = newCount > 10 ? 10 : newCount;

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
        handleProductAdd: handleProductAdd,
        handleProductDelete: handleProductDelete,
        handleCartClear: handleCartClear,
    };

    return (
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.object,
}