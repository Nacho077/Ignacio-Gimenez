import React from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from './projects.constants'
import Card from './card/card'

import s from './projects.module.css'

const Projects = ({ id }) => {
    const { t } = useTranslation('common')

    return (
        <section id={id} className={s.container_main}>
            <h2 className="title">{t("projects.title")}</h2>
            <p className={s.subtitle}>{t("projects.subtitle")}</p>
            <div className={s.container_projects}>
                {projects.map((p, i) => (
                    <Card project={p} index={i} key={i}/>
                ))}
            </div>
        </section>
    )
}

export default Projects