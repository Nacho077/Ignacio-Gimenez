import mercadoLibre from '../../assets/images/logos/mercadolibre.png'
import henry from '../../assets/images/logos/henry.png'

import java from '../../assets/images/logos/java.svg'
import javaScript from '../../assets/images/logos/javascript.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import react from '../../assets/images/logos/react.svg'
import redux from '../../assets/images/logos/redux.svg'
import sequelize from '../../assets/images/logos/sequelize.svg'
import docker from '../../assets/images/logos/docker.svg'
import go from '../../assets/images/logos/golang.svg'
import kibana from '../../assets/images/logos/kibana.svg'
import newRelic from '../../assets/images/logos/newrelic.svg'

export const experiences = (t) => [
    {
        company: "mercado_libre",
        positions: [
            {
                position: `${t('experience.positions.software-engineer')} Sr - ${t('experience.positions.developer')} Sr`,
                from: `${t('experience.time.march')} 2025`,
                to: t('experience.time.current'),
                responsabilities: t('experience.responsabilities.mercado-libre.sr', { returnObjects: true })
            },
            {
                position: `${t('experience.positions.software-engineer')} - ${t('experience.positions.developer')} Ssr`,
                from: `${t('experience.time.june')} 2022`,
                to: `${t('experience.time.march')} 2025`,
                responsabilities: t('experience.responsabilities.mercado-libre.ssr', { returnObjects: true })
            },
            {
                position: `${t('experience.positions.software-developer')} - ${t('experience.positions.developer')} Jr`,
                from: `${t('experience.time.april')} 2021`,
                to: `${t('experience.time.june')} 2022`,
                responsabilities: t('experience.responsabilities.mercado-libre.sr', { returnObjects: true })
            }
        ],
        technologies: [
            {img: java, name: "java"},
            {img: go, name: "go"},
            {img: docker, name: "docker"}, 
            {img: kibana, name: "kibana"},
            {img: newRelic, name: "newRelic"}
        ]
    },
    {
        company: "henry",
        positions: [
            {
                position: "Mentor",
                from: `${t('experience.time.february')} 2023`,
                to: `${t('experience.time.march')} 2024`,
                responsabilities: t('experience.responsabilities.henry.mentor', { returnObjects: true })
            },
            {
                position: t('experience.positions.cra'),
                from: `${t('experience.time.february')} 2023`,
                to: `${t('experience.time.march')} 2024`,
                responsabilities: t('experience.responsabilities.henry.cra', { returnObjects: true })
            }
        ],
        technologies: [
            {img: javaScript, name: "js"},
            {img: react, name: "react"},
            {img: redux, name: "redux"},
            {img: sequelize, name: "sequelize"},
            {img: postgreSQL, name: "postgresql"}
        ]
    }
]

export const companies = [
    {name: "mercado_libre", logo: mercadoLibre},
    {name: "henry", logo: henry}
]