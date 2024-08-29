import React from 'react';
import { Button } from '@nextui-org/react';
import { UserIcon } from './UserIcon';
import { useTranslation } from 'react-i18next';
import './CabButton.css';
import { Link } from 'react-router-dom';
export default function App() {
    const { t } = useTranslation();
    return (
        <Link to="https://qabul.usat.uz/?phone=null">
            <Button
            id="button"
                color="default"
                variant="flat"
                size="lg"
                startContent={<UserIcon />}
                className="text-white  px-10 py-8 text-2xl font-medium leading-[1.27rem] text-left rounded-full"
                style={{ border:"2px solid white" }}
            >
                {t('cabinet')}
            </Button>
        </Link>
    );
}
