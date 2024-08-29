import React from 'react';
import Tg from "../../../assets/logos/tg.svg";
import Instagram from "../../../assets/logos/insta.svg";
import Facebook from '../../../assets/logos/facebook.svg';
import "./Footer.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="mx-auto px-4">
                <ul className="list">
                    <li className='item'>
                        <Link to="https://t.me/usatuzb">
                            <img
                                src={Tg}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                        <Link to="https://www.instagram.com/usatuz/">
                            <img
                                src={Instagram}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                        <Link to="https://www.facebook.com/usatuz/">
                            <img
                                src={Facebook}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                    </li>
                    <li className="item">
                        <p className="item_manzil">
                            <Link
                                className="text-center"
                                to={
                                    'https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19'
                                }
                            >
                                {t('manzil')}
                            </Link>
                        </p>
                    </li>
                    <li className="item">
                        <p className="tel">
                            <Link
                                className="text-center"
                                to={'tel:+998 78 888 38 88'}
                            >
                                +998 78 888 38 88
                            </Link>
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
