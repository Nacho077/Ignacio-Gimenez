import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card/card'
import s from './skills.module.css'

//logos
import css3 from '../../assets/images/logos/css3.svg'
import express from '../../assets/images/logos/express.svg'
import firebase from '../../assets/images/logos/firebase.svg'
import html5 from '../../assets/images/logos/html5.svg'
import java from '../../assets/images/logos/java.svg'
import javaScript from '../../assets/images/logos/javascript.svg'
import materialUi from '../../assets/images/logos/material-ui.svg'
import nodeJS from '../../assets/images/logos/nodejs.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import react from '../../assets/images/logos/react.svg'
import redux from '../../assets/images/logos/redux.svg'
import typeScript from '../../assets/images/logos/typescript.svg'
import sequelize from '../../assets/images/logos/sequelize.svg'


const Skills = () => {
    const { t } = useTranslation('common')
    const knowledges = [
        [css3, "css3"],
        [express, "express"],
        [firebase, "firebase"],
        [html5, "html5"],
        [java, "java"],
        [javaScript, "javaScript"],
        [materialUi, "material"],
        [nodeJS, "nodeJS"],
        [postgreSQL, "postgreSQL"],
        [react, "react"],
        [redux, "redux"],
        [typeScript, "typeScript"],
        [sequelize, "sequelize"]
    ]

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("skills.title")}</h1>
            <div className={s.container_logos}>
                {knowledges.map((k, i) => (
                    <div className={s.logo} key={i}>
                        <Card img={k[0]} name={k[1]} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills