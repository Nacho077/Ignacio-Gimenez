import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import s from './navBar.module.css'

const NavBar = () => {
    const { t, i18n } = useTranslation('common')
    const [state, setState] = useState(false)
    const [visibleMenu, setVisibleMenu] = useState(false)

    const handleChange = val => {
        setState(val)
        if (val === true) i18n.changeLanguage('en')
        if (val === false) i18n.changeLanguage('es')
    }

    const handleScroll = id => {
        var goTo =  select(id)
        console.log(goTo)

        if(goTo.top !== 0){
            window.requestAnimationFrame(handleScroll)
            window.scrollTo(0, goTo.top)
        }

        setVisibleMenu(false)
    }

    const select = id => {
        switch(id){
            case "about":
                return document.getElementById("about").getBoundingClientRect()
            case "skills":
                return document.getElementById("skills").getBoundingClientRect()
            case "projects":
                return document.getElementById("projects").getBoundingClientRect()
            case "contact":
                return document.getElementById("contact").getBoundingClientRect()
            default:
                break
        }
    }

    const routes = ["about", "skills", "projects", "contact"]

    return (
        <header className={s.container_main}>
            <div className={s.container_icon}>
                <MenuIcon
                    fontSize="large"
                    onClick={() => setVisibleMenu(true)}
                />
            </div>
            <div className={`${s.container_links} ${visibleMenu ? s.menu_mobile : ''}`}>
                {routes.map(route => (
                    <span
                        className={s.link}
                        key={route}
                        onClick={() => handleScroll(route)}
                    >
                        {t(`nav.${route}`)}
                    </span>
                ))}
                <CloseIcon
                    fontSize="large"
                    onClick={() => setVisibleMenu(false)}
                    className={s.close_icon}
                />
                <label className={s.switch}>
                    <input
                        type="checkbox"
                        className={s.checkbox}
                        onChange={() => handleChange(!state)}
                        checked={state}
                    />
                    <div className={s.switch_btn}>
                        <p
                            className={s.text}
                            style={{
                                left: state ? "50px" : "10px"
                            }}
                        >{state ? "EN" : "ES"}</p>
                    </div>
                </label>
            </div>
        </header>
    )
}

export default NavBar