import React from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <>
            <button type="button" onClick={() => changeLanguage("en")} >EN</button>
            <button type="button" onClick={() => changeLanguage("vi")} > VN</button>
        </>
    );
}

export default Language;