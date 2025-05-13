import PropTypes from 'prop-types'; 

import { Link } from "react-router-dom";

import './Card.css';

// краткая карточка товара (в каталоге, хитах продаж)
export function Card(props) {
    const { id, images, title, price } = props;
    return (
    <div className="col-4">
        <div className="card catalog-item-card">
            <img
                src={images && images[0]}
                    className="card-img-top img-fluid"
                alt={title}
            />
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">{price} руб.</p>
                <Link to={`/catalog/${id}`} className="btn btn-outline-primary">
                    Заказать
                </Link>
            </div>

        </div>
    </div>
    );
}

Card.propTypes = {    
    id: PropTypes.number,
    images: PropTypes.array,
    title: PropTypes.string,
    price: PropTypes.number,
}