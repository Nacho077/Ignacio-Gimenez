import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { networks } from './contact.constants'
import * as emailjs from 'emailjs-com'
import s from './contact.module.css'

const Contact = ({id, openModal}) => {
    const { REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_KEY } = process.env
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
        if(!state.input || !state.text) {
            return openModal({
                text: t('contact.err.incomplete'),
                buttons: [
                    {
                        text: t('button.close')
                    }
                ]
            })
        } 
        
        if(!/^\S+@\S+\.\S+$/.test(state.input)) {
            return openModal({
                text: t('contact.err.notEmail'),
                buttons: [
                    {
                        text: t('button.close')
                    }
                ]
            })
        }

        sendEmail()
        .then(() => {
            setState({
                ...state,
                text: ''
            })

            openModal({
                text: t('contact.sended'),
                buttons: [
                    {
                        text: t('button.accept')
                    }
                ]
            })
        })
        .catch(() => {
            openModal({
                text: t('contact.err.cantSendEmail'),
                buttons: [
                    {
                        text: t('button.accept')
                    }
                ]
            })
        })
    }

    return (
        <section id={id} className={s.container_main}>
            <h2 className="title">{t("contact.title")}</h2>
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
                <button className={"btn"} onClick={handleSend}>{t('contact.send')}</button>
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
                        <img src={network.icon} alt={network.name} />
                        <span className={s.text}>{network.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contact