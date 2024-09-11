// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Tg from "../../assets/logos/tg.svg";
import Instagram from "../../assets/logos/insta.svg";
import Facebook from '../../assets/logos/facebook.svg';

import "./FooterSlide.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// import required modules
import {  Autoplay } from 'swiper/modules';
export default function App() {
    const {t}=useTranslation();

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                autoplay={{
                    delay: 2500, // 2.5 seconds delay between slides
                    disableOnInteraction: false, // Autoplay will not be disabled after user interaction
                }}
                modules={[ Autoplay]}
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
              
            >
                <SwiperSlide style={{backgroundColor:"transparent"}}>
                    
                     <li className='child'>
                        <Link to="https://t.me/usatuzb">
                            <img
                            loading='lazy'
                                src={Tg}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                        <Link to="https://www.instagram.com/usatuz/">
                            <img
                            loading='lazy'
                                src={Instagram}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                        <Link to="https://www.facebook.com/usatuz/">
                            <img
                            loading='lazy'
                                src={Facebook}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></img>
                        </Link>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{backgroundColor:"transparent"}}>
                     <li className="child">
                        <p className="child_manzil">
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
                </SwiperSlide>
                <SwiperSlide style={{backgroundColor:"transparent"}}>
                     <li className="child">
                        <p className="child_tel">
                            <Link
                                className="text-center"
                                to={'tel:+998 78 888 38 88'}
                            >
                                +998 78 888 38 88
                            </Link>
                        </p>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    );
}