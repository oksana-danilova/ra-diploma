import { Logo } from "../UI/Logo/Logo";
import { MenuHeader } from "../Blocks/MenuHeader/MenuHeader";
import { Controls } from "../Blocks/Controls/Controls";

import { menuItemsHeader } from "../../data/constData";

import "./Header.css";

// шапка интернет-страницы
// содержит логотип, строку меню и управляющие кнопки (поиск и значок корзины)
export function Header() {
    const classMenu = "navbar-nav mr-auto";

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Logo />
                        <MenuHeader classMenu={classMenu} menuItems={menuItemsHeader} />
                        <Controls />
                    </nav>
                </div>
            </div>
        </header>
    );
};
