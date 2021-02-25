import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './card.module.css'

const Card = ({ project: { img, size, title, config, links }, i }) => {
    const { t } = useTranslation('common')
    const name = title.split("-").join(" ")

    return (
        <div className={s.container_main} style={{flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'}}>
            <div className={s.container_img}>
                <img src={img} alt={title} style={size} />
            </div>
            <div className={s.container_description} style={config}>
                <div>
                    <h1 className={s.title}>{name}</h1>
                    <p className={s.description}>{t(`projects.${title}`)}</p>
                </div>
                <div className={s.container_buttons}>
                    {links.repo &&
                        <a
                            href={links.repo}
                            className={s.btn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("projects.repo")}
                        </a>}
                    {links.site &&
                        <a
                            href={links.site}
                            className={s.btn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {
                            t("projects.site")}
                        </a>}
                </div>
            </div>
        </div>
    )
}

export default Card
