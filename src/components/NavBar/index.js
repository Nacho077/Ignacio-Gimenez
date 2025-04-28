import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import menuIcon from '../../assets/images/icons/menu.svg'
import closeIcon from '../../assets/images/icons/close.svg'
import { routes, languages, networks } from './navBar.constants'
import s from './navBar.module.css'

const NavBar = () => {
    const { t, i18n } = useTranslation('common')
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        // Observers for link color animation
        const sections = document.querySelectorAll('section')

        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            }, {threshold: 0.2}
        )

        sections.forEach(section => observer.observe(section))
        
        // Close menu with keyboard
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setVisibleMenu(false)
            }
        }
    
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            sections.forEach(section => observer.unobserve(section))
            observer.disconnect()

            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <>
            <header className={s.container_main}>
                <button className={s.container_icon} onClick={() => setVisibleMenu(true)} aria-label='open menu'>
                    <img src={menuIcon} alt="open menu icon" />
                </button>
                <h1 className={s.title}>IG</h1>
                <nav className={`${s.container_menu} ${visibleMenu ? s.menu_mobile : ''}`} role='navigation'>
                    <div className={s.container_links}>
                        <button className={s.close_icon} onClick={() => setVisibleMenu(false)} aria-label='close menu'>
                            <img src={closeIcon} alt="close menu icon" />
                        </button>

                        <ul>
                            {routes.map(route => (
                                <li key={route}>
                                    <a
                                        href={`#${route}`}
                                        className={`${s.link} ${activeSection === route ? s.active_route : ''}`}
                                        onClick={() => setVisibleMenu(false)}
                                        aria-current={activeSection === route ? 'page' : undefined}
                                    >
                                        {t(`nav.${route}`)}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <select
                                    onChange={event => i18n.changeLanguage(event.target.value)}
                                    className={s.select}
                                    aria-label='select language'
                                >
                                    {languages.map(lan => (
                                        <option value={lan.val} key={lan.val}>{t(lan.name)}</option>
                                    ))}
                                </select>
                            </li>
                        </ul>

                        {/* Visible only in mobile */}
                        <div className={s.container_networks}>
                                {networks.map(net => (
                                    <a href={net.link} key={net.name} target="_blank" rel="noreferrer">
                                        <img className={s.icon} src={net.icon} alt={net.name} />
                                    </a>
                                ))}
                        </div>
                    </div>
                </nav>
            </header>

            <div className={s.line}></div>
        </>
    )
}

export default NavBar