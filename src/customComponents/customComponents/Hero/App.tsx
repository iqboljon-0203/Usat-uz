import React from 'react';
const Navbar = React.lazy(() => import('../../../components/Navbar/App.jsx'));
const Footer = React.lazy(() => import('../Footer/App'));
import  "./Hero.css"
import AppButton from "../../../components/ApplicationButton/App.jsx";
import CabinetButton from "../../../components/TelegramBot/App.jsx";
import { useTranslation } from 'react-i18next';
import LoginButton from "../../../components/CabinetButton/App.jsx";
const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center">
                <h1 className="title">
                    {t('hero_title')}
                </h1>
                <p className="hero_info">
                    {t('hero_text')}
                </p>
                <div className="buttons">
                    <AppButton></AppButton>
                    <CabinetButton></CabinetButton>
                    <LoginButton></LoginButton>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Hero;
