import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom';

import { Menu } from "../Menu/Menu"; 

import "./MenuHeader.css";

// обертка строки меню в шапке
export function MenuHeader(props) {
    const location = useLocation();
    
    return (
        <div className="collapse navbar-collapse" id="navbarMain">
            <Menu typeMenu="menu" classMenu={props.classMenu} menuItems={props.menuItems} activePage={location.pathname}/>
        </div>
    );
};

MenuHeader.propTypes = {
    classMenu: PropTypes.string,
    menuItems: PropTypes.array,
}

