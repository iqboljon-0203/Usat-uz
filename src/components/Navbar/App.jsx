import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
} from '@nextui-org/react';
import UsatLogo from '../../assets/logos/usatLogo.webp';
import LanguageSelector from '../LanguageSelector/App';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useTranslation();

    const scrollToSection = sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Menu yopish
        }
    };

    const menuItems = [
        { label: t('universitet_haqida'), section: 'info' },
        { label: t('bakalavriat'), section: 'bachelor' },
        { label: t('magistratura'), section: 'contract' },
        { label: t('afzalliklar'), section: 'university' },
        { label: t('qulayliklar'), section: 'magistr' },
        { label: t('savol-javob'), section: 'answers' },
    ];

    return (
        <Navbar
            className="navbar"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>
            <NavbarContent justify="start">
                <NavbarBrand>
                    <img
                    loading='lazy'
                        src={UsatLogo}
                        width={353}
                        height={353}
                        alt="Usat logo"
                    ></img>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            onClick={() => scrollToSection(item.section)}
                            className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                            color="foreground"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent  justify="end">
                
                <NavbarItem className='ml-4'>
                    <LanguageSelector />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='pt-20'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href="#"
                            size="lg"
                            onClick={() => scrollToSection(item.section)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
