import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './card.module.css'

const Card = ({ project: { img, title, links, skills, video }, index }) => {
    const { t } = useTranslation('common')
    const name = title.split("-").join(" ")

    return (
        <div
            id={title}
            className={s.container_main}
        >
            <div
                className={s.container_img}
                style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
            >
                <video
                    className={s.frame}
                    id={s[title]}
                    title={title}
                    controls
                >
                    <source src={video} type="video/mp4"/>
                </video>
                <img
                    src={img}
                    id={s[title]}
                    alt={title}
                    className={s.img}
                />
                <div className={s.container_logos} id={s[title]}>
                    {skills.map(skill => (
                        <div key={skill.name} className={s.container_skill}>
                            <img src={skill.logo} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.container_description}>
                <div className={s.container_info}>
                    <h1 className={s.title}>{name}</h1>
                    <p className={s.description}>{t(`projects.${title}`)}</p>
                </div>
                <div className={s.container_buttons}>
                    {links?.repo &&
                        <a
                            href={links.repo}
                            className={s.btn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("projects.repo")}
                        </a>}
                    {links?.site &&
                        <a
                            href={links.site}
                            className={s.btn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("projects.site")}
                        </a>}
                </div>
            </div>
        </div>
    )
}

export default Card
