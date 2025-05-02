import { useTranslation } from "react-i18next"
import { useState } from "react"
import { experiences, companies } from './experience.constants'

import s from './experience.module.css'

const Experience = ({ id }) => {
    const { t } = useTranslation('common')
    const [companyActive, setCompanyActive] = useState('mercado_libre')


    return (
        <section id={id} className={s.container_main}>
            <h2 className="title">{t("experience.title")}</h2>
            <div className={s.container}>
                <div className={s.container_logos}>
                    {companies.map(company => (
                        <article className={`${s.card} ${s[company.name]}`}
                        id={company.name === companyActive  ? s.active_card : ''}
                        onClick={() => setCompanyActive(company.name)}
                        role="button"
                        key={company.name}
                        >
                            <img
                            src={company.logo}
                            alt={company.name}
                            className={s.logo}
                            />
                            <h2>{company.name.replace('_', ' ')}</h2>
                        </article>
                    ))}
                </div>
                <div className={s.container_info}>
                    {experiences(t).map(exp => (
                        <article
                        id={s[exp.company]}
                        className={`${s.container_company} ${exp.company === companyActive ? s.active : s.inactive}`}
                        key={exp.company}
                        >
                            <div className={s.container_experience}>
                                {exp.positions.map(pos => (
                                    <article className={s.info} key={pos.position}>
                                        <div className={s.dot}></div>
                                        <div className={s.container_name}>
                                            <h4 className={s.position_name}>{pos.position}</h4>
                                            <span>{pos.from} - {pos.to}</span>
                                        </div>
                                        <div className={s.line}></div>
                                        <ul className={`${s.list}`}>
                                            {pos.responsabilities?.map((responsability, i) => <li key={i}>{responsability}</li>)}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                            <ul className={s.container_technologies}>
                                {exp.technologies.map((tech, i) => (
                                    <li key={i}><img src={tech.img} alt={tech.name}/></li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience