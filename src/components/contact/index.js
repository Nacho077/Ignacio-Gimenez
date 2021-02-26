import React from 'react'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import s from './contact.module.css'

const Contact = () => {
    const { t } = useTranslation('common')

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("contact")}</h1>
            <div className={s.container_links}>
                <a
                    className={s.link}
                    href="https://github.com/Nacho077"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon
                    fontSize="large"
                    />
                    <span className={s.text}>Github</span>
                </a>
                <a
                    className={s.link}
                    href="https://www.linkedin.com/in/ignacio-gimenez-305799184/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon
                    fontSize="large"
                    />
                    <span className={s.text}>Linkedin</span>
                </a>
                <a
                    className={s.link}
                    href="mailto:ignaciogimenez70@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={s.text}>ignaciogimenez70@gmail.com</span>
                </a>
            </div>
        </div>
    )
}

export default Contact