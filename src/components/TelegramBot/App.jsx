import React from 'react';
import { Button } from '@nextui-org/react';
import { UserIcon } from './UserIcon';
import { useTranslation } from 'react-i18next';
import './CabButton.css';
import { Link } from 'react-router-dom';
export default function App() {
    const { t } = useTranslation();
    return (
        <Link to="https://t.me/usat_bot?start=qabul_usat_uz?utm_source=web&utm_medium=site&utm_campaign=usatuz">
            <Button
            id="button"
                color="default"
                variant="flat"
                size="lg"
                startContent={<UserIcon />}
                className="text-white  px-10 py-8 text-2xl font-medium leading-[1.27rem] text-left rounded-full"
                style={{ border:"2px solid white", 
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '500', }}
            >
                {t('login_bot')}
            </Button>
        </Link>
    );
}
