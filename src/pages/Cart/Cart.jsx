import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { useCart } from '../../contexts/CartContext/CartContext';

import { Form } from '../../components/Form/Form';
import { InputGroup } from '../../components/Form/InputGroup';
import { CustomButton } from '../../components/UI/Buttons/CustomButton';
import { Alert } from '../../components/UI/Alert/Alert';
import { Preloader } from '../../components/UI/Preloader/Preloader';

import { formOrderInputs } from "../../data/constData";

// корзина
export function Cart() {
    const [response, setResponse] = useState(null);
    const { postOrder } = useGetData();
    const { cart, handleProductDelete, handleCartClear } = useCart();
    let cartItems = null;
    let totalPrice = 0;

    function handleFormSubmit(event) {
        event.preventDefault();

        const { phone, address } = event.target.elements;

        const body = {
            owner: {
                phone: phone.value,
                address: address.value,
            },
            items: cart.map(({ id, price, count }) => ({ id, price, count })),
        };

        postOrder(body)
            .then(() => {
                setResponse(<Alert type="success" text={'Ваш заказ оформлен!'} />);
                handleCartClear();
            })
            .catch((error) => setResponse(<Alert type="danger" text={error} />));
    }

    if (cart.length) {
        cartItems = cart.map((cartItem, index) => {
            const { id, title, price, size, count } = cartItem;
            const total = count * price;
            totalPrice += total;

            return (
                <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>
                        <Link to={`/products/${id}`}>{title}</Link>
                    </td>
                    <td>{size}</td>
                    <td>{count}</td>
                    <td>{price} руб.</td>
                    <td>{total} руб.</td>
                    <td>
                        <CustomButton
                            type='btn'
                            className="btn btn-outline-danger btn-sm"
                            onButtonClick={() => handleProductDelete(index)}
                        >
                            Удалить
                        </CustomButton>
                    </td>
                </tr>
            );
        });
    }

    const inputGroups = formOrderInputs.map(({ id, htmlFor, text, inputId, placeholder }) => {
        return (
            <InputGroup key={id} htmlFor={htmlFor} text={text} inputId={inputId} placeholder={placeholder} />
        );
    });

    return (
        <>
            <section className="cart">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="5" className="text-right">
                                Общая стоимость
                            </td>
                            <td>{totalPrice} руб.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {postOrder.uploading ? (
                <Preloader />
            ) : (
                response || (
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                        <div
                            className="card"
                            style={{ maxWidth: '30rem', margin: '0 auto' }}
                        >
                            <Form
                                formClass="card-body"
                                visibilityClass=""
                                onFormSubmit={handleFormSubmit}
                            >
                                {inputGroups}
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="agreement"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="agreement">
                                        Согласен с правилами доставки
                                    </label>
                                </div>
                                <CustomButton
                                    type="submit"
                                    className="btn btn-outline-secondary"
                                >
                                    Оформить
                                </CustomButton>
                            </Form>
                        </div>
                    </section>
                )
            )}
        </>
    );
}