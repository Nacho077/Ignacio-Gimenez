import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card/card'
import s from './projects.module.css'

//projects
import HenryWorldWeb from '../../assets/images/projects/Henry-World-Web.png'
import HenryWorldApp from '../../assets/images/projects/Henry-World-App.jpg'
import Wultur from '../../assets/images/projects/Wultur.png'
import MercadoHenry from '../../assets/images/projects/MercadoHenry.png'
import PokePage from '../../assets/images/projects/PokePage.png'

//skills
import css3 from '../../assets/images/logos/css3.svg'
import firebase from '../../assets/images/logos/firebase.svg'
import materialUi from '../../assets/images/logos/material-ui.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import react from '../../assets/images/logos/react.svg'
import redux from '../../assets/images/logos/redux.svg'
import typeScript from '../../assets/images/logos/typescript.svg'

//videos
import HenryWorldWebVideo from '../../assets/videos/HenryWorldWeb.mp4'
import WulturVideo from '../../assets/videos/Wultur.mp4'
import MercadoHenryVideo from '../../assets/videos/MercadoHenry.mp4'
import PokePageVideo from '../../assets/videos/Pokepage.mp4'

const Projects = () => {
    const { t } = useTranslation('common')

    const projects = [
        {
            img: HenryWorldWeb,
            size: { width: "300px", height: "250px" },
            title: "Henry-World-Web",
            links: {
                site: "https://henry-app.vercel.app/"
            },
            skills: [
                { logo: react, name: "React" },
                { logo: redux, name: "Redux" },
                { logo: firebase, name: "Firebase" },
            ],
            video: HenryWorldWebVideo
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
                { logo: react, name: "React Native" },
                { logo: redux, name: "Redux" },
                { logo: firebase, name: "Firebase" },
            ],
            video: HenryWorldApp
        },
        {
            img: Wultur,
            size: { width: "300px", height: "250px" },
            title: "Wultur",
            links: {
                site: "https://wultur.herokuapp.com/"
            },
            skills: [
                { logo: react, name: "React" },
                { logo: materialUi, name: "Material-Ui" },
                { logo: postgreSQL, name: "PostgreSQL" },
            ],
            video: WulturVideo
        },
        {
            img: MercadoHenry,
            size: { width: "300px", height: "250px" },
            title: "Mercado-Henry",
            links: {
                repo: "https://github.com/Nacho077/MercadoHenry",
                site: "https://mercadohenry.herokuapp.com/"
            },
            skills: [
                { logo: react, name: "React" },
                { logo: css3, name: "CSS3" },
                { logo: postgreSQL, name: "PostgreSQL" },
            ],
            video: MercadoHenryVideo
        },
        {
            img: PokePage,
            size: { width: "300px", height: "250px" },
            title: "Poke-Page",
            links: {
                repo: "https://nacho077.github.io/PokePage",
                site: "https://github.com/Nacho077/PokePage"
            },
            skills: [
                { logo: typeScript, name: "TypeScript" },
                { logo: react, name: "React" },
                { logo: redux, name: "Redux" },
            ],
            video: PokePageVideo
        }
    ]

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("projects.title")}</h1>
            <h3 className={s.subtitle}>{t("projects.subtitle")}</h3>
            <div className={s.container_projects}>
                {projects.map((p, i) => (
                    <div key={i}>
                        <Card project={p} i={i} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects