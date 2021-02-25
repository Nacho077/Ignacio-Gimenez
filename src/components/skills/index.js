import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card/card'
import s from './skills.module.css'

//logos
import css3 from '../../imgs/logos/css3.svg'
import express from '../../imgs/logos/express.svg'
import firebase from '../../imgs/logos/firebase.svg'
import html5 from '../../imgs/logos/html5.svg'
import java from '../../imgs/logos/java.svg'
import javaScript from '../../imgs/logos/javascript.svg'
import materialUi from '../../imgs/logos/material-ui.svg'
import nodeJS from '../../imgs/logos/nodejs.svg'
import postgreSQL from '../../imgs/logos/postgresql.svg'
import react from '../../imgs/logos/react.svg'
import redux from '../../imgs/logos/redux.svg'
import typeScript from '../../imgs/logos/typescript.svg'


const Skills = () => {
    const { t } = useTranslation('common')
    const knowledges = [
        [css3, "css3"],
        [express, "express"],
        [firebase, "firebase"],
        [html5, "html5"],
        [java, "java"],
        [javaScript, "javaScript"],
        [materialUi, "material-Ui"],
        [nodeJS, "nodeJS"],
        [postgreSQL, "postgreSQL"],
        [react, "react"],
        [redux, "redux"],
        [typeScript, "typeScript"]
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