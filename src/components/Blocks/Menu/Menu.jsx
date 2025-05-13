import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom';

import { MenuItem } from "../../UI/MenuItem/MenuItem";

import "./Menu.css";

// отрисовка меню
// (строка меню в шапке и столбец с меню в подвале, перечень категорий в каталоге)
export function Menu(props) {
    const location = useLocation();

    const { typeMenu, classMenu, menuItems, activePage, query } = props;

    const menuList = menuItems.map(({ id, title, link }) => {
        let isActiveParam = false;
        let itemLink = link;

        if (typeMenu === "menu") {
            if (activePage) {
                isActiveParam = activePage === link;
            } 
        }

        if (typeMenu === "categories") {   
            if (activePage) {
                isActiveParam = activePage === String(id);
            } else {
                if (id === 999999) {
                    isActiveParam = true;
                }
            }

            if (id === 999999) {
                itemLink = location.pathname;
                if (query) {
                    itemLink = itemLink + `?q=${query}`;
                }
            } else {
                itemLink = location.pathname + `?categoryId=${id}`;
                if (query) {
                    itemLink = itemLink + `&q=${query}`;
                }
            }
        }

        return <MenuItem key={id} title={title} link={itemLink} isActiveParam={isActiveParam}/>
        
    })

    return (
        <ul className={classMenu}>
            {menuList}
        </ul>
    );
};

Menu.propTypes = {
    typeMenu: PropTypes.string,
    classMenu: PropTypes.string,
    menuItems: PropTypes.array, 
    activePage: PropTypes.string,
    query: PropTypes.string,
}

