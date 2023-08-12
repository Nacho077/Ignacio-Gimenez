import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './presentation.module.css'

import image from '../../assets/images/profile.jpeg'

import cvEN from '../../assets/cvs/IgnacioGimenezEn.pdf'

const Presentation = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <div className={s.container_main}>
            <div className={s.container}>
                <div className={s.container_photo}>
                    <div className={s.photo}>
                        <img src={image} alt="Ignacio Gimenez" />
                    </div>
                </div>
                <a
                    href={i18n.language === "es" ? cvEN : cvEN}
                    download={i18n.language === "es" ? cvEN : cvEN}
                    className={s.btn}
                >
                    {t('presentation.download')}
                </a>
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