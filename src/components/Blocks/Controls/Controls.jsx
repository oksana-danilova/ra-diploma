import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { Form } from '../../Form/Form';
import { SearchFormInput } from '../../Form/SearchFormInput';
import { useCart } from '../../../contexts/CartContext/CartContext';

import "./Controls.css";

// управляющие кнопки (поиск и значок корзины)
export function Controls() {
    const [searchFormVisibility, setSearchFormVisibility] = useState(false);
    const [formValue, setFormValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const cart = useCart();

    useEffect(() => {
        setSearchFormVisibility(false);
    }, [location.pathname]);

    function handleInputChange({ target }) {
        const { value } = target;

        setFormValue(value);
    }

    function toggleSearchFormVisibility(event) {
        event.preventDefault();      

        if (searchFormVisibility && formValue.trim() !== '') {
            setFormValue('');

            navigate(`/catalog?q=${formValue}`);
        }

        setSearchFormVisibility((prevState) => !prevState);
    }

    function handleCartTransition(event) {
        event.preventDefault();
        navigate("/cart");
    }

    const searchFormClass = 'header-controls-search-form form-inline';

    return (
        <div>
            <div className="header-controls-pics">
                <div 
                    data-id="search-expander" 
                    className="header-controls-pic header-controls-search" 
                    onClick={toggleSearchFormVisibility}>                   
                </div>
                <div 
                    className="header-controls-pic header-controls-cart"
                    onClick={handleCartTransition}>
                    <div className={`header-controls-cart-full ${!cart.length && 'invisible'}`}>
                        {cart.length}
                    </div>
                    <div className="header-controls-cart-menu"></div>
                </div>
            </div>
            
            <Form                
                formClass={searchFormClass}
                visibilityClass={`${!searchFormVisibility && 'invisible'}`}
                onFormSubmit={toggleSearchFormVisibility}
            >
                <SearchFormInput 
                    initialValue={formValue}
                    onChange={handleInputChange}
                />
            </Form>

        </div>
    );
};
