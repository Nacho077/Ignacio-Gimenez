import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card/card'
import s from './projects.module.css'

//projects
import HenryWorldWeb from '../../imgs/projects/Henry-World-Web.png'
import HenryWorldApp from '../../imgs/projects/Henry-World-App.jpg'
import Wultur from '../../imgs/projects/Wultur.png'
import MercadoHenry from '../../imgs/projects/MercadoHenry.png'
import PokePage from '../../imgs/projects/PokePage.png'

//skills
import css3 from '../../imgs/logos/css3.svg'
import firebase from '../../imgs/logos/firebase.svg'
import materialUi from '../../imgs/logos/material-ui.svg'
import postgreSQL from '../../imgs/logos/postgresql.svg'
import react from '../../imgs/logos/react.svg'
import redux from '../../imgs/logos/redux.svg'
import typeScript from '../../imgs/logos/typescript.svg'

const Projects = () => {
    const { t } = useTranslation('common')

    const projects = [
        {
            img: HenryWorldWeb,
            size: { width: "400px", height: "250px" },
            title: "Henry-World-Web",
            links: {
                site: "https://henry-app.vercel.app/"
            },
            skills: [
                {logo: react, name: "React"},
                {logo: redux, name: "Redux"},
                {logo: firebase, name: "Firebase"},
            ]
        },
        {
            img: HenryWorldApp,
            size: { width: "200px", height: "400px" },
            title: "Henry-World-App",
            config: { marginTop: "50px" },
            links: {
                site: "https://expo.io/accounts/eameo/builds/9c4b55aa-d259-4ab9-bf07-70e094df3830"
            },
            skills: [
                {logo: react, name: "React Native"},
                {logo: redux, name: "Redux"},
                {logo: firebase, name: "Firebase"},
            ]
        },
        {
            img: Wultur,
            size: { width: "400px", height: "250px" },
            title: "Wultur",
            links: {
                site: "https://wultur.herokuapp.com/"
            },
            skills: [
                {logo: react, name: "React"},
                {logo: materialUi, name: "Material-Ui"},
                {logo: postgreSQL, name: "PostgreSQL"},
            ]
        },
        {
            img: MercadoHenry,
            size: { width: "400px", height: "250px" },
            title: "Mercado-Henry",
            links: {
                repo: "https://github.com/Nacho077/MercadoHenry",
                site: "https://mercadohenry.herokuapp.com/"
            },
            skills: [
                {logo: react, name: "React"},
                {logo: css3, name: "CSS3"},
                {logo: postgreSQL, name: "PostgreSQL"},
            ]
        },
        {
            img: PokePage,
            size: { width: "400px", height: "250px" },
            title: "Poke-Page",
            links: {
                repo: "https://nacho077.github.io/PokePage",
                site: "https://github.com/Nacho077/PokePage"
            },
            skills: [
                {logo: typeScript, name: "TypeScript"},
                {logo: react, name: "React"},
                {logo: redux, name: "Redux"},
            ]
        }
    ]

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("projects.title")}</h1>
            <h3 className={s.subtitle}>{t("projects.subtitle")}</h3>
            {projects.map((p, i) => (
                <div key={i}>
                    <Card project={p} i={i} />
                </div>
            ))}
        </div>
    )
}

export default Projects