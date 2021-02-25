import React from 'react'
import s from './card.module.css'

const Card = ({ img, name }) => (
    <div className={s.container_logo}>
        <img
            src={img}
            className={`${s.img} ${s[name]}`}
            alt={name}
        />
        <h3 className={s.subtitle}>{name}</h3>
    </div>
)

export default Card