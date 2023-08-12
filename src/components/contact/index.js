import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as emailjs from 'emailjs-com'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import s from './contact.module.css'

const Contact = () => {
    const { REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_KEY } = process.env
    console.log(REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_KEY)
    const [state, setState] = useState({
        input: '',
        text: '',
        inputFocus: false
    })
    const { t } = useTranslation('common')
    const networks = [
        {
            name: "Github",
            link: "https://github.com/Nacho077",
            icon: <GitHubIcon fontSize="large" />
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/ignacio-gimenez-305799184/",
            icon: <LinkedInIcon fontSize="large" />
        },
        {
            name: "ignaciogimenez70@gmail.com",
            link: "mailto:ignaciogimenez70@gmail.com",
            icon: ""
        }
    ]

    const handleChanges = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = () => {
        let template = {
            from: state.input,
            message_html: state.text
        }

        return emailjs.send(
            REACT_APP_EMAIL_SERVICE,
            REACT_APP_EMAIL_TEMPLATE,
            template,
            REACT_APP_EMAIL_KEY
        )
    }

    const handleSend = () => {
        if(!state.input || !state.text) return alert(t('contact.err.incomplete'))
        if(!/^\S+@\S+\.\S+$/.test(state.input)) return alert(t('contact.err.notEmail'))

        sendEmail()
        .then(() => {
            setState({
                ...state,
                text: ''
            })

            alert(t('contact.sended'))
        })
        .catch(() => {
            alert('ERROR')
        })

        

    }

    return (
        <div className={s.container_main}>
            <h1 className="title">{t("contact.title")}</h1>
            <div className={s.container_form}>
                <div className={s.container_input}>
                    <input
                        className={s.input}
                        type="text"
                        value={state.input}
                        name="input"
                        placeholder=""
                        required=""
                        onChange={e => handleChanges(e)}
                        onFocus={() => setState({ ...state, inputFocus: true })}
                        onBlur={() => setState({ ...state, inputFocus: false })}
                        style={{
                            borderBottom: `1px solid ${state.input ? '#e78133' : '#555'}`
                        }}
                    />
                    <label
                        className={s.label}
                        style={{
                            top: !state.input ? (
                                state.inputFocus ? '-12px' : '0'
                            ) : '-12px',
                            fontSize: state.input ? '12px' : (
                                state.inputFocus ? '12px' : '16px'
                            ),
                        }}
                    >Email</label>
                </div>
                <textarea
                    className={s.textarea}
                    name="text"
                    value={state.text}
                    placeholder={t('contact.message')}
                    autoCapitalize="sentences"
                    onChange={e => handleChanges(e)}
                    required
                    style={{
                        border: `1px solid ${state.text ? '#e78133' : '#555'}`
                    }}
                />
                <button className={s.btn} onClick={handleSend}>Enviar</button>
            </div>
            <div className={s.container_links}>
                {networks.map(network => (
                    <a 
                        key={network.name}
                        className={s.link}
                        href={network.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {network.icon}
                        <span className={s.text}>{network.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Contact