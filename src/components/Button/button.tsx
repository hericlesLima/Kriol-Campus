import React from 'react'

import './button.scss'

function Button (props: {title: string, icon: string, onSubmit?:any}) {
    return (
        <button  onClick={props.onSubmit}>
            {props.title} <i className={props.icon}/>
        </button>

    )
}

export default Button;
