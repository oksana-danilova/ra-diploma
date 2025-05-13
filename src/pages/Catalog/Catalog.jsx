/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//компоненты (components)
import { CatalogBody } from '../../components/Blocks/CatalogBody/CatalogBody';
import { Form } from '../../components/Form/Form';
import { SearchFormInput } from '../../components/Form/SearchFormInput';

import './Catalog.css'; 

// каталог (самостоятельная страница)
export function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formValue, setFormValue] = useState('');

    function handleInputChange({ target }) {
        const { value } = target;

        setFormValue(value);
    }

    function handleSearchFormSubmit(event) {
        event.preventDefault();

        const q = event.target.elements.query.value;
        const prevSearchParams = Object.fromEntries(searchParams.entries());
        delete prevSearchParams.offset;

        if (q) {
            setSearchParams({ ...prevSearchParams, q });
        } else {
            const { q, ...rest } = prevSearchParams;
            setSearchParams(rest);
        }
    }

    useEffect(() => {
        const q = searchParams.get('q');

        if (q) {
            setFormValue(q)
        } 
    }, [searchParams]);

    const searchFormClass = 'catalog-search-form form-inline';
    const visibilityClass = '';

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <Form
                formClass={searchFormClass}
                visibilityClass={visibilityClass}
                onFormSubmit={handleSearchFormSubmit}
            >
                <SearchFormInput
                    initialValue={formValue}
                    onChange={handleInputChange}
                />
            </Form>

            <CatalogBody />
        </section>
    );
}