import PropTypes from 'prop-types'; 

import { Link } from "react-router-dom";

import "./MenuItem.css";

// пункт меню
export function MenuItem(props) {
    let { title, link, isActiveParam } = props;

    return (
        <li className="nav-item">
            <Link className={ isActiveParam ? 'nav-link active' : 'nav-link' } to={link} >
                {title}
            </Link>
        </li>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    isActiveParam: PropTypes.bool,
}
