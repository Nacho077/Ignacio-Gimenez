import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './presentation.module.css'

import image from '../../assets/images/profile.jpeg'

const Presentation = ({openModal}) => {
    const { t } = useTranslation('common')

    const handleDownload = (fileUrl) => {
        fetch(fileUrl)
        .then(res => res.blob(fileUrl))
        .then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'IgnacioGimenez.pdf';
            alink.click();
        })
    }

    const handleModal = () => {
        openModal({
            text: t('presentation.languageSelection.text'),
            buttons: [
                {
                    text: t('languages.es'),
                    onClick: () => {
                        handleDownload('../../assets/cvs/IgnacioGimenezEs.pdf')
                    }
                },
                {
                    text: t('languages.en'),
                    onClick: () => {
                        handleDownload('../../assets/cvs/IgnacioGimenezEn.pdf')
                    }
                }
            ]
        })
    }

    return (
        <div className={s.container_main}>
            <div className={s.container}>
                <div className={s.container_photo}>
                    <div className={s.photo}>
                        <img src={image} alt="Ignacio Gimenez" />
                    </div>
                </div>
                <button
                    onClick={handleModal}
                    className={s.btn}
                >
                    {t('presentation.download')}
                </button>
            </div>
            <div className={s.container_resume}>
                <div className={s.container_name}>
                    <h1>Ignacio</h1>
                    <h1>Gimenez</h1>
                </div>
                <div className={s.resume}>
                    {t("presentation.resume")}
                </div>
            </div>
        </div>
    )
}

export default Presentation