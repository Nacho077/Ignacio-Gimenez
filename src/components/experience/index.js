import { useTranslation } from "react-i18next"
import { useState } from "react"
import s from './experience.module.css'

import mercadoLibre from '../../assets/images/logos/mercadolibre.png'
import henry from '../../assets/images/logos/henry.png'


import css3 from '../../assets/images/logos/css3.svg'
import html5 from '../../assets/images/logos/html5.svg'
import java from '../../assets/images/logos/java.svg'
import javaScript from '../../assets/images/logos/javascript.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import react from '../../assets/images/logos/react.svg'
import redux from '../../assets/images/logos/redux.svg'
import sequelize from '../../assets/images/logos/sequelize.svg'
import docker from '../../assets/images/logos/docker.svg'
import go from '../../assets/images/logos/golang.svg'
import gin from '../../assets/images/logos/gin.svg'
import git from '../../assets/images/logos/git.svg'
import github from '../../assets/images/logos/github.svg'
import jira from '../../assets/images/logos/jira.svg'
import kibana from '../../assets/images/logos/kibana.svg'
import lombok from '../../assets/images/logos/lombok.png'
import spring from '../../assets/images/logos/spring.svg'
import newRelic from '../../assets/images/logos/newrelic.svg'

const Experience = () => {
    const { t } = useTranslation('common')
    const [companyActive, setCompanyActive] = useState('mercado_libre')

    const experiences = [
        {
            company: "mercado_libre",
            positions: [
                {
                    position: `${t('experience.positions.software-engineer')} - ${t('experience.positions.developer')} Ssr`,
                    from: `${t('experience.time.june')} 2022`,
                    to: t('experience.time.current'),
                    responsibilities: t('experience.responsibilities.mercado-libre.ssr', { returnObjects: true })
                },
                {
                    position: `${t('experience.positions.software-developer')} - ${t('experience.positions.developer')} Jr`,
                    from: `${t('experience.time.april')} 2021`,
                    to: `${t('experience.time.june')} 2022`,
                    responsibilities: t('experience.responsibilities.mercado-libre.jr', { returnObjects: true })
                }
            ],
            technologies: [java, spring, go, gin, docker, git, github, jira, kibana, lombok, newRelic]
        },
        {
            company: "henry",
            positions: [
                {
                    position: "Mentor",
                    from: `${t('experience.time.february')} 2023`,
                    to: t('experience.time.current'),
                    responsibilities: t('experience.responsibilities.henry.mentor', { returnObjects: true })
                },
                {
                    position: t('experience.positions.cra'),
                    from: `${t('experience.time.february')} 2023`,
                    to: t('experience.time.current'),
                    responsibilities: t('experience.responsibilities.henry.cra', { returnObjects: true })
                }
            ],
            technologies: [html5, css3, javaScript, react, redux, sequelize, postgreSQL]
        }
    ]

    const companies = [
        {name: "mercado_libre", logo: mercadoLibre},
        {name: "henry", logo: henry}
    ]

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("experience.title")}</h1>
            <div className={s.container}>
                <div className={s.container_logos}>
                    {companies.map(company => (
                        <div className={`${s.card} ${s[company.name]}`}
                        id={company.name === companyActive  ? s.active_card : ''}
                        onClick={() => setCompanyActive(company.name)}
                        key={company.name}
                        >
                            <img
                            src={company.logo}
                            alt={company.name}
                            className={s.logo}
                            />
                            <h2>{company.name.replace('_', ' ')}</h2>
                        </div>
                    ))}
                </div>
                <div className={s.container_info}>
                    {experiences.map(exp => (
                        <div
                        id={s[exp.company]}
                        className={`${s.container_company} ${exp.company === companyActive ? s.active : s.inactive}`}
                        key={exp.company}
                        >
                            <h2>{exp.company.replace('_', ' ')}</h2>
                            <div className={s.container_experience}>
                                {exp.positions.map(pos => (
                                    <div className={s.info} key={pos.position}>
                                        <div className={s.dot}></div>
                                        <div className={s.container_name}>
                                            <h3 className={`${s.positionName}`}>{pos.position}</h3>
                                            <span>{pos.from} - {pos.to}</span>
                                        </div>
                                        <div className={s.line}></div>
                                        <ul className={`${s.list}`}>
                                            {pos.responsibilities?.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className={s.container_technologies}>
                                {exp.technologies.map((tech, i) => (
                                    <img src={tech} key={i}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience