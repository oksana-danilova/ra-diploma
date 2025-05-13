/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { useCart } from '../../contexts/CartContext/CartContext';
import { Alert } from '../../components/UI/Alert/Alert';
import { Preloader } from '../../components/UI/Preloader/Preloader';

import './Product.css';

// карточка товара
export function Product() {
    const [productData, setProductData] = useState({});
    const [chosenSize, setChosenSize] = useState(null);
    const [count, setCount] = useState(1);
    const [loadingError, setLoadingError] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const { handleProductAdd } = useCart();
    const { getProduct } = useGetData();

    useEffect(() => {
        getProduct(params.id)
            .then((data) => setProductData(data))
            .catch((error) => setLoadingError(error));
    }, []);

    function onReturnBtnClick() {
        navigate('/catalog');
    }

    function handleButtonClick() {
        const { id, title, price } = productData;
        const newProduct = {
            id,
            title,
            price,
            size: chosenSize,
            count,
        };

        handleProductAdd(newProduct);
        navigate('/cart');
    }

    const {
        title,
        images,
        sku,
        manufacturer,
        color,
        material,
        season,
        reason,
        sizes,
    } = productData;

    const productView = (
        <>
            <h2 className="text-center">{title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={images && images[0]} className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>
                            Размеры в наличии:&nbsp;
                            {sizes &&
                                sizes.map(({ size, available }) => {
                                    return (
                                        available && (
                                            <span
                                                key={size}
                                                className={`item-size ${chosenSize === size && 'item-size_selected'
                                                    }`}
                                                onClick={() => setChosenSize(size)}
                                            >
                                                {size}
                                            </span>
                                        )
                                    );
                                })
                            }
                        </p>
                        <p>
                            Количество: 
                            <span className="btn-group btn-group-sm pl-2">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setCount(count - 1 >= 1 ? count - 1 : 1)}
                                >
                                    ‒
                                </button>
                                <button className="btn btn-outline-primary">{count}</button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setCount(count + 1 <= 10 ? count + 1 : 10)}
                                >
                                    +
                                </button>
                            </span>
                        </p>
                    </div>
                    <button
                        className="btn btn-danger btn-block btn-lg"
                        onClick={handleButtonClick}
                        disabled={!chosenSize}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </>
    );

    const errorView = loadingError && 
        <Alert 
            type="danger" 
            text={loadingError}
            btnText="Вернуться в каталог"
            btnOnClick={onReturnBtnClick}
        />;

    return (
        <section className="catalog-item">
            {getProduct.loading ? <Preloader /> : errorView || productView};
        </section>
    )
}

