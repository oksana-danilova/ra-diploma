export const menuItemsHeader = [
    { id: "home", title: "Главная", link: "/" },
    { id: "catalog", title: "Каталог", link: "/catalog" },
    { id: "about", title: "О магазине", link: "/about" },
    { id: "contacts", title: "Контакты", link: "/contacts" },
];

export const menuItemsFooter = [
    { id: "about", title: "О магазине", link: "/about" },
    { id: "catalog", title: "Каталог", link: "/catalog" },
    { id: "contacts", title: "Контакты", link: "/contacts" },
];

export const classPaySystems = [
    { id: "paypal", className: "footer-pay-systems footer-pay-systems-paypal" },
    { id: "master", className: "footer-pay-systems footer-pay-systems-master-card" },
    { id: "visa", className: "footer-pay-systems footer-pay-systems-visa" },
    { id: "yandex", className: "footer-pay-systems footer-pay-systems-yandex" },
    { id: "webmoney", className: "footer-pay-systems footer-pay-systems-webmoney" },
    { id: "qiwi", className: "footer-pay-systems footer-pay-systems-qiwi" },
];

export const classSociaLinks = [
    { id: "twitter", className: "footer-social-link footer-social-link-twitter" },
    { id: "vk", className: "footer-social-link footer-social-link-vk" },
]

export const contacts = {
    tel: "+7-495-790-35-03",
    email: "office@bosanoga.ru",
}

export const telLink = "tel:" + contacts.tel;
export const emailLink = "mailto:" + contacts.email;

export const copyrightText = "2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.  Все права защищены. Доставка по всей России!";
export const scheduleText = "Ежедневно: с 09-00 до 21-00";

export const formOrderInputs = [
    {
        id: 1,
        htmlFor: "phone",
        text: "Телефон",
        inputId: "phone",
        placeholder: "Ваш телефон",        
    },
    {
        id: 2,
        htmlFor: "address",
        text: "Адрес доставки",
        inputId: "address",
        placeholder: "Адрес доставки",
    },
];