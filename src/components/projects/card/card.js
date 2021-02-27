import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './card.module.css'

const Card = ({ project: { img, size, title, config, links, skills }, i }) => {
    const { t } = useTranslation('common')
    const name = title.split("-").join(" ")

    return (
        <div className={s.container_main} style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
            <div className={s.container_img} style={{ flexDirection: i % 2 === 0 ? 'row-reverse' : 'row' }}>
                <img src={img} alt={title} style={size} />
                <div className={s.container_logos} style={{ height: size.height }}>
                    {skills.map(skill => (
                        <div key={skill.name} className={s.container_skill}>
                            <img src={skill.logo} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                {/* <div className={s.container_video}>
                    <video
                    width={size.width}
                    height={size.height}
                    autoPlay
                    muted
                    src="https://dms.licdn.com/playlist/C4D05AQHDiMrw6EA1sQ/mp4-720p-30fp-crf28/0/1614086253939?e=1614538800&v=beta&t=lk4DKN-R9v95fhoQrVeaTEPOV73MpbzHCJfRQgnSxsQ"
                    >
                    </video>
                </div> */}
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
