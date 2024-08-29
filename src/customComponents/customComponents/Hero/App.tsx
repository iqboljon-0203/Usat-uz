import React from 'react';
import Navbar from "../../../components/Navbar/App.jsx"
import  "./Hero.css"
import AppButton from "../../../components/ApplicationButton/App.jsx";
import CabinetButton from "../../../components/CabinetButton/App.jsx";
import Footer from '../Footer/App';
import { useTranslation } from 'react-i18next';
const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center">
                <h1 className="title">
                    {t('muvaffaqiyatli_kelajak_shu_yerdan_boshlanadi')}
                </h1>
                <p className="info">
                    {t('hero_text')}
                </p>
                <div className="buttons">
                    <AppButton></AppButton>
                    <CabinetButton></CabinetButton> 
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Hero;
