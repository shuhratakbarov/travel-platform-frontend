import {
    ABOUT,
    BANK,
    CONTACT,
    HOSPITAL,
    HOTEL,
    LOGIN,
    MONUMENT,
    RESTAURANT,
    SHOP,
    TOUR,
    TRANSPORT
} from "../config-client";

const navigationData = [
    { label: 'Bosh sahifa', key: '1', link: '/' },
    { label: 'Sayohatlar', key: '2', link: TOUR },
    { label: 'Mehmonxonalar', key: '3', link: HOTEL },
    { label: 'Restoranlar', key: '4', link: RESTAURANT },
    { label: 'Shifoxonalar', key: '5', link: HOSPITAL },
    { label: 'Obidalar', key: '6', link: MONUMENT },
    { label: 'Do\'konlar', key: '7', link: SHOP },
    { label: 'Banklar', key: '8', link: BANK },
    { label: 'Transport xizmatlari', key: '9', link: TRANSPORT },
    { label: 'Biz haqimizda', key: '10', link: ABOUT },
    { label: 'Bog\'lanish', key: '11', link: CONTACT },
    { label: 'Ro\'yxatdan o\'tish', key: '12', link: LOGIN },
];

export default navigationData;

