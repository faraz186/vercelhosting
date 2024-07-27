import React from 'react'
import styles from './Card.module.css'

const Card = ({desc,title,imgSrc}) => {

  return (

      <div className={styles.card}>
        <img className={styles.cardImg} src={imgSrc} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>

  )
}

export default Card
