import { useState } from 'react';
import { createRequest } from '../utils/createRequest';

// запросы по видам
export function useGetData() {
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [topSalesLoading, setTopSalesLoading] = useState(true);
    const [productsLoading, setProductsLoading] = useState(true);
    const [productLoading, setProductLoading] = useState(true);
    const [orderLoading, setOrderLoading] = useState(false);

    function getCategories() {
        setCategoriesLoading(true);

        return createRequest('categories', () => setCategoriesLoading(false));
    }

    getCategories.loading = categoriesLoading; 

    
    function getTopSales() {
        setTopSalesLoading(true);

        return createRequest('top-sales', () => setTopSalesLoading(false));
    }

    getTopSales.loading = topSalesLoading;


    function getProducts(searchParams) {
        const filter = searchParams ? `?${searchParams}` : '';

        setProductsLoading(true);

        return createRequest(`items${filter}`, () => setProductsLoading(false));
    }

    getProducts.loading = productsLoading;
    

    function getProduct(id) {
        setProductLoading(true);

        return createRequest(`items/${id}`, () => setProductLoading(false));
    }

    getProduct.loading = productLoading;


    function postOrder(body) {
        setOrderLoading(true);

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }

        return createRequest('order', () => setOrderLoading(false), opts);
    }

    postOrder.uploading = orderLoading;

    return { getTopSales, getCategories, getProducts, getProduct, postOrder };
}
