import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './presentation.module.css'

const Presentation = () => {
    const { t } = useTranslation('common')

    return (
        <div className={s.container_main}>
            <div className={s.container_photo}>
                PHOTO
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