import React from 'react';
import { Button } from '@nextui-org/react';
import { FileIcon } from './FileIcon';
import { useTranslation } from 'react-i18next';
import './AppButton.css'
import { Link } from 'react-router-dom';
export default function App() {
    const { t } = useTranslation();
    return (
        <Link to="https://qabul.usat.uz/sign-up
        ">
            <Button
                id="button"
                size="lg"
                color="default"
                variant="flat"
                startContent={<FileIcon />}
                className="text-cyan-900/[1] px-10 py-8 text-2xl font-medium leading-[1.27rem] text-left rounded-full "
                style={{
                    backgroundColor: 'white'
                }}
            >
                {t('ariza')}
            </Button>
        </Link>
    );
}
