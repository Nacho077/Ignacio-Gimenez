import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './card.module.css'

const Card = ({ project: { img, size, title, config, links, skills }, i }) => {
    const { t } = useTranslation('common')
    const name = title.split("-").join(" ")

    return (
        <div
            id={title}
            className={s.container_main}
        >
            <div
                className={s.container_img}
                style={{ flexDirection: i % 2 === 0 ? 'row-reverse' : 'row' }}
            >
                <iframe
                    className={s.frame}
                    title={title}
                    width={size.width}
                    height={size.height}
                    src="https://www.youtube.com/embed/hCJxxWYFeKA?rel=0&controls=0&loop=1"
                    frameBorder="0"
                >
                </iframe>
                <img
                    src={img}
                    alt={title}
                    style={{
                        height: size.height,
                        width: size.width,
                        transform: `translateX(${i % 2 !== 0 ? '-' : ''}120px)`
                    }} />
                <div className={s.container_logos} style={{ height: size.height }}>
                    {skills.map(skill => (
                        <div key={skill.name} className={s.container_skill}>
                            <img src={skill.logo} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
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
