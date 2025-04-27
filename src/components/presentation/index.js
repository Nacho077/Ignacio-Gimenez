import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './presentation.module.css'

import image from '../../assets/images/profile.jpeg'

const Presentation = ({openModal}) => {
    const { t } = useTranslation('common')

    const handleModal = () => {
        openModal({
            text: t('presentation.languageSelection.text'),
            buttons: [
                {
                    text: 
                    <a
                        href="https://drive.google.com/uc?export=download&id=1E7u_HMMNJ3uaqYuNYwZ1oUbE2mv-nXG8"
                        download
                        className={s.link}
                        >
                            {t('languages.es')}
                    </a>
                },
                {
                    text:
                    <a
                        href="https://drive.google.com/uc?export=download&id=1jAL57YOLNnbBjx57LTaMUWJRu9RPdAQd"
                        download
                        className={s.link}
                        >
                            {t('languages.en')}
                    </a>
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