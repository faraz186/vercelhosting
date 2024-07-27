import React from "react";
import styles from './Button.module.css'

export const Button = (props)=>{
    console.log(props)
    return(
        <button>{props.btnText}</button>
    )
}

