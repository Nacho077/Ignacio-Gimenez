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
import nodeJS from '../../assets/images/logos/nodejs.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import react from '../../assets/images/logos/react.svg'
import redux from '../../assets/images/logos/redux.svg'
import typeScript from '../../assets/images/logos/typescript.svg'
import sequelize from '../../assets/images/logos/sequelize.svg'
import datadog from '../../assets/images/logos/datadog.svg'
import docker from '../../assets/images/logos/docker.svg'
import go from '../../assets/images/logos/golang.svg'
import gin from '../../assets/images/logos/gin.svg'
import git from '../../assets/images/logos/git.svg'
import github from '../../assets/images/logos/github.svg'
import jira from '../../assets/images/logos/jira.svg'
import kibana from '../../assets/images/logos/kibana.svg'
import lombok from '../../assets/images/logos/lombok.png'
import spring from '../../assets/images/logos/spring.svg'
import sql from '../../assets/images/logos/sql.png'
import trello from '../../assets/images/logos/trello.svg'
import python from '../../assets/images/logos/python.svg'
import nosql from '../../assets/images/logos/noSql.png'
import sqlite from '../../assets/images/logos/sqlite.svg'
import nest from '../../assets/images/logos/nest.svg'
import workbench from '../../assets/images/logos/workbench.png'
import newRelic from '../../assets/images/logos/newrelic.svg'


const Skills = () => {
    const { t } = useTranslation('common')
    const knowledges = [
        {
            section: "Back End", 
            technologies: [
                {name: "nodeJS", img: nodeJS},
                {name: "typeScript", img:typeScript},
                {name: "express", img:express},
                {name: "nest", img: nest},
                {name: "sequelize", img: sequelize},
                {name: "java", img: java},
                {name: "lombok", img: lombok},
                {name: "spring", img: spring},
                {name: "go", img: go},
                {name: "gin", img: gin},
                {name: "python", img: python},
            ]
        },
        {
            section: t('skills.sections.dataBase'), 
            technologies: [
                {name: "sql", img: sql},
                {name: "noSQL", img: nosql},
                {name: "docker", img: docker},
                {name: "postgreSQL", img: postgreSQL},
                {name: "sqlite", img: sqlite},
                {name: "workbench", img: workbench},
                {name: "firebase", img: firebase},
            ]
        },
        {
            section: "Front End", 
            technologies: [
                {name: "css3", img: css3},
                {name: "html5", img: html5},
                {name: "javaScript", img: javaScript},
                {name: "react", img: react},
                {name: "redux", img: redux},
            ]
        },
        {
            section: t('skills.sections.tools'), 
            technologies: [
                {name: "datadog", img: datadog},
                {name: "git", img: git},
                {name: "github", img: github},
                {name: "jira", img: jira},
                {name: "kibana", img: kibana},
                {name: "trello", img: trello},
                {name: "newRelic", img: newRelic},
            ]
        }
    ]

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("skills.title")}</h1>
            <div className={s.container_logos}>
                {knowledges.map(knowledge => (
                    <div key={knowledge.section} className={s.container_section}>
                        <h2>{knowledge.section}</h2>
                        <div className={s.container_techs}>
                            {knowledge.technologies.map(tech => (
                                <Card name={tech.name} img={tech.img} key={tech.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills