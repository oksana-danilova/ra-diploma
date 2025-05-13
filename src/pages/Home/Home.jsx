/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

//компоненты (components)
import { Preloader } from '../../components/UI/Preloader/Preloader';
import { Alert } from '../../components/UI/Alert/Alert';
import { CardsBlock } from '../../components/Blocks/CardsBlock/CardsBlock';
import { CatalogBody } from '../../components/Blocks/CatalogBody/CatalogBody';

//утилиты и хуки
import { useGetData } from '../../hooks/useGetData';

import './Home.css';

// главная страница
export function Home() {
    const [topProducts, setTopProducts] = useState([]);
    const { getTopSales } = useGetData();
    const [loadingError, setLoadingError] = useState(null);

    const topSalesLoading = () => {
        setLoadingError(null);
        getTopSales()
            .then((data) => {
                setTopProducts(data);
            })
            .catch((error) => {
                if (error == "Failed to fetch") {
                    setLoadingError("Что-то пошло не так...");
                } else {
                    setLoadingError(error);
                }
            })
    }

    useEffect(() => {
        topSalesLoading();
    }, []);

    const errorView = loadingError &&
        <Alert 
            type="danger" 
            text={loadingError}
            btnText="Повторить загрузку"
            btnOnClick={topSalesLoading}
        />;

    return (
        <>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                {getTopSales.loading ? 
                    <Preloader /> : 
                    errorView || <CardsBlock products={topProducts} />
                }
            </section>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <CatalogBody />
            </section>
        </>
    );
}
