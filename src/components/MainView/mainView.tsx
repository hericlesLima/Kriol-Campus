import React from 'react'
import './mainView.scss'


const MainView = (props: {children: JSX.Element[] | JSX.Element}) => {
    return(
        <div className="main-view">
            {props.children}
        </div>
    )
}

export default MainView;