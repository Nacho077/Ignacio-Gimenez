import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import menuIcon from '../../assets/images/icons/menu.svg'
import closeIcon from '../../assets/images/icons/close.svg'
import gitHubIcon from '../../assets/images/icons/github.svg'
import linkedInIcon from '../../assets/images/icons/linkedin.svg'
import emailIcon from '../../assets/images/icons/email.svg'
import s from './navBar.module.css'

const NavBar = () => {
    const { t, i18n } = useTranslation('common')
    const [visibleMenu, setVisibleMenu] = useState(false)
    const languages = [
        {val: "es", name: t('languages.es')},
        {val: "en", name: t('languages.en')}
    ]
    const routes = ["about", "skills", "experience", "projects", "contact"]
    const networks = [
        {
            name: "Github",
            link: "https://github.com/Nacho077",
            icon: gitHubIcon
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/ignacio-gimenez-305799184/",
            icon: linkedInIcon
        },
        {
            name: "ignaciogimenez70@gmail.com",
            link: "mailto:ignaciogimenez70@gmail.com",
            icon: emailIcon
        }
    ]

    return (
        <header className={s.container_main}>
            <div className={s.container_icon} onClick={() => setVisibleMenu(true)}>
                <img src={menuIcon} alt="menu_icon" />
            </div>
            <div className={`${s.container_menu}`}>
                <h1 id={s.title}>IG</h1>
                <div className={s.container_links} id={`${visibleMenu ? s.menu_mobile : ''}`}>
                    {routes.map(route => (
                        <a
                            href={`#${route}`}
                            className={s.link}
                            key={route}
                            onClick={() => setVisibleMenu(false)}
                        >
                            {t(`nav.${route}`)}
                        </a>
                    ))}
                    <div className={s.close_icon} onClick={() => setVisibleMenu(false)}><img src={closeIcon} alt="menu_icon" /></div>
                    <select onClick={event => i18n.changeLanguage(event.target.value)} className={s.select}>
                        {languages.map(lan => (
                            <option value={lan.val} key={lan.val}>{lan.name}</option>
                        ))}
                    </select>
                    <div className={s.container_nertworks}>
                            {networks.map(net => (
                                <a href={net.link} target="_blank" key={net.name}>
                                    <img className={s.icon} src={net.icon} alt={net.name} />
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar