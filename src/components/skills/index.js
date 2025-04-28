import React from 'react'
import { useTranslation } from 'react-i18next'
import { knowledges } from './skills.constants'
import Card from './card/card'

import s from './skills.module.css'


const Skills = ({id}) => {
    const { t } = useTranslation('common')

    return (
        <section id={id} className={s.container_main}>
            <h2 className="title">{t("skills.title")}</h2>
                {knowledges.map(knowledge => (
                    <article key={knowledge.section} className={s.container_section}>
                        <h3>{t(knowledge.section)}</h3>
                        <ul className={s.container_techs}>
                            {knowledge.technologies.map(tech => (
                                <Card t={t} name={tech.name} img={tech.img} type={tech.type} key={tech.name} />
                            ))}
                        </ul>
                    </article>
                ))}
        </section>
    )
}

export default Skills