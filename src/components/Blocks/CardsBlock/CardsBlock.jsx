import PropTypes from 'prop-types';

import { Card } from "../../UI/Card/Card";

// блок карточек товаров (в разделах Хиты продаж, Каталог)
export function CardsBlock({ products }) {
    return (
        <div className="row">
            {products &&
                products.map(({ id, images, title, price }) => {
                    return (
                        <Card key={id} id={id} images={images} title={title} price={price} />
                    );
                })}
        </div>
    );
}

CardsBlock.propTypes = {
    products: PropTypes.array,
}