import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import s from './contact.module.css'

const Contact = () => {
    const [state, setState] = useState({
        input: '',
        text: '',
        inputFocus: false
    })
    const { t } = useTranslation('common')

    const handleChanges = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
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
                    autocapitalize="sentences"
                    onChange={e => handleChanges(e)}
                    required
                    style={{
                        border: `1px solid ${state.text ? '#e78133' : '#555'}`
                    }}
                />
                <button className={s.btn}>Enviar</button>
            </div>
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