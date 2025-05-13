import { Link } from "react-router-dom";

import {
    telLink,
    emailLink,
    contacts,
    scheduleText
} from "../../data/constData";

export function Contacts() {
    return (
        <>
            <p>Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д. 17, бизнес-центр W Plaza.</p>
            <h5 className="text-center">Координаты для связи:</h5>
            <p>Телефон:
                <Link className="nav-link" to={telLink}>
                    {contacts.tel}
                </Link>
                ({scheduleText})</p>
            <p>Email:
                <Link className="nav-link" to={emailLink}>
                    {contacts.email}
                </Link>
            </p>
        </>
    );
}

