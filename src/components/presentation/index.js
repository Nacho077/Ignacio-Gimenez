import React from 'react'
import { useTranslation } from 'react-i18next'
import { cvs } from './presentation.constants'

import image from '../../assets/images/profile.png'

import s from './presentation.module.css'

const Presentation = ({openModal, id}) => {
    const { t } = useTranslation('common')

    const handleModal = () => {
        openModal({
            text: t('presentation.languageSelection.text'),
            buttons: cvs.map(cv => ({
                content:
                <a
                    href={cv.link}
                    className={s.link}
                    download
                >
                    {t(`languages.${cv.language}`)}
                </a>
            }))
        })
    }

    return (
        <section id={id} className={s.container_main}>
            <div className={s.container}>
                <div className={s.photo}>
                    <img src={image} alt="Ignacio Gimenez" />
                </div>
                <button
                    onClick={handleModal}
                    className={"btn"}
                    aria-label="Download Curriculum Vitae"
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
        </section>
    )
}

export default Presentation