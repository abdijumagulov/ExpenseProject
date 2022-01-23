import React from 'react'
import './Card.css'

function Card(props){// Это UI компонента для карт типа эта компонента много разавая
    const classes = "card " + props.className
    return <div className={classes}>{props.children}</div>
}
export default Card