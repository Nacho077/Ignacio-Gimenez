import React from 'react'

import s from './card.module.css'

const Card = ({ t, img, name, type }) => (
    <li className={`${s.card}`}>
        <span className={`${s.badge}  ${s[`badge_${type}`]}`}>
            {t(`skills.badges.${type}`)}
        </span>
        <img
            src={img}
            className={`${s.img} ${s[name]}`}
            alt={name}
        />
        <p className={s.subtitle}>{name}</p>
    </li>
)

export default Card